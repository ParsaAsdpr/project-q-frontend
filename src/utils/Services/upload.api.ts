import http from "./httpService";
import { apiUrl } from "@/config.json";

const apiEndpoint = apiUrl + "/api/upload";

const tokenKey = "token";

const upload = async (userId: string, formData: FormData) => {
  const res = await http.post(`${apiEndpoint}/${userId}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      "x-auth-token": localStorage.getItem(tokenKey),
    },
  });

  return res;
};

export default {
  upload,
};
