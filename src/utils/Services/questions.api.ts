import http from "./httpService";
import { apiUrl } from "@/config.json";

const apiEndpoint = apiUrl + "/api/questions";


interface questionInterface {
    title: string;
    tags: string[];
  }


const getQuestions = () => {
  return http.get(apiEndpoint);
};

const getQuestion = (id: string) => {
  return http.get(`${apiEndpoint}/${id}`);
};

const postQuestion = (data: questionInterface ) => {
  return http.post(apiEndpoint, data);
};

export default {
  getQuestion,
  getQuestions,
  postQuestion,
};
