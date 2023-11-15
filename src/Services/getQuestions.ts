import http from "./httpService";
import config from '../config.json'

export const getQuestions = () => {
    return http.get(`${config.apiEndpoint}/questions`);
}