import http from "./httpService";
import { apiUrl } from "@/config.json";

const apiEndpoint = apiUrl + "/api/users";

interface signupInterface {
  signup_name: string;
  signup_username: string;
  signup_email: string;
  signup_password: string;
  signup_confirmPassword: string;
}
export const registerUser = (data: signupInterface) => {
  return http.post(apiEndpoint, {
    username: data.signup_username,
    email: data.signup_email,
    password: data.signup_password,
    profile: {
      name: data.signup_name,
    },
  });  
};
