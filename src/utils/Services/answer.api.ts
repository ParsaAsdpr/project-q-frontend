import http from "./httpService";
import {apiUrl} from '@/config.json'

const apiEndpoint = apiUrl + "/api/answers";

export const getAnswers = () => {
    return http.get(apiEndpoint);
}

export const getAnswer = (id: string) => {
    return http.get(`${apiEndpoint}/${id}`);
}