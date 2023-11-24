import { jwtDecode } from "jwt-decode";
import http from "./httpService";
import { apiUrl } from "@/config.json";

const apiEndpoint = apiUrl + "/api/login";
const tokenKey = "token";

interface loginInterface {
  login_email: string;
  login_password: string;
}

http.setJwt(localStorage.getItem(tokenKey) ?? "");

const login = async (data: loginInterface) => {
  const { data: jwt } = await http.post(apiEndpoint, {
    email: data.login_email,
    password: data.login_password,
  });
  localStorage.setItem(tokenKey, jwt);
};

const loginWithJwt = (jwt: string) => {
  localStorage.setItem(tokenKey, jwt);
};

const logout = () => {
  localStorage.removeItem(tokenKey);
};

const getCurrentUser = () => {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwt ? jwtDecode(jwt) : "";
  } catch (e) {
    console.log(e);
  }
};

export default {
  login,
  logout,
  getCurrentUser,
  loginWithJwt,
};
