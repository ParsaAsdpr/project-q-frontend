import http from "./httpService";
import {apiUrl} from '../../config.json'

const apiEndpoint = apiUrl + "/questions";

export const getQuestions = () => {
    return http.get(apiEndpoint);
}