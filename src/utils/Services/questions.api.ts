import http from "./httpService";
import {apiUrl} from '@/config.json'

const apiEndpoint = apiUrl + "/api/questions";

export const getQuestions = () => {
    return http.get(apiEndpoint);
}

export const getQuestion = (id: string) => {
    return http.get(`${apiEndpoint}/${id}`);
}