import http from "./httpService";
import { apiUrl } from "@/config.json";

const apiEndpoint = apiUrl + "/login";

interface loginInterface {
    login_email: string;
    login_password: string;
}

export const login = (data: loginInterface) => {
    return http.post(apiEndpoint, {
        email: data.login_email,
        password: data.login_password,
    });
}