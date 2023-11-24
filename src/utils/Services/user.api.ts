import { ProfileTypes } from "@/types/UserTypes";
import http from "./httpService";
import { apiUrl } from "@/config.json";
import authApi from "./auth.api";

const apiEndpoint = apiUrl + "/api/users";

interface signupInterface {
  signup_name: string;
  signup_username: string;
  signup_email: string;
  signup_password: string;
  signup_confirmPassword: string;
}

interface editProfileInterface {
  username: string;
  profile: ProfileTypes;
}

const registerUser = (data: signupInterface) => {
  return http.post(apiEndpoint, {
    username: data.signup_username,
    email: data.signup_email,
    password: data.signup_password,
    profile: {
      name: data.signup_name,
    },
  });  
};

const editUser = async (data: editProfileInterface, userId: string) => {
  try {
    const response = await http.put(`${apiEndpoint}/${userId}`, data);
    authApi.logout();
    authApi.loginWithJwt(response.headers["x-auth-token"]);
    return response.data;
  } catch (error) {
    console.log(error)
    throw new Error("Failed to Edit the User.")
  }
};

export default {
  registerUser,
  editUser,
};