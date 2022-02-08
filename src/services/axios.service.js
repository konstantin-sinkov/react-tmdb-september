import axios from "axios";

import baseURL from "../configs/urls";
import bearer_token from "./bearer_token";

const axiosService = axios.create({
    baseURL: baseURL,
    headers: {
        Authorization: 'Bearer ' + bearer_token
    }
});

export {axiosService};