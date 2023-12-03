import http from "./httpService";
import {apiUrl} from '@/config.json'

const apiEndpoint = apiUrl + "/api/answers";

const getAnswers = () => {
    return http.get(apiEndpoint);
}

const getAnswer = (id: string) => {
    return http.get(`${apiEndpoint}/${id}`);
}

const postAnswer = (id: string) => {
    return http.get(`${apiEndpoint}/${id}`);
}

export default {
    getAnswers,
    getAnswer,
    postAnswer
}