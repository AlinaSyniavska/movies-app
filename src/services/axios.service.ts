import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

import {baseURL} from "../constants";

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((config: AxiosRequestConfig) => {
    config.headers = {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZmE3NTk3YzJjMzkxNDA5MGI0ZTI4ZGY3MGJjY2U2NyIsInN1YiI6IjYyOTNjZDkwM2ZmMmRmMThjOThjYTk0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VuMMyLfwd188DfXyOsh3diivfukUrHHrFhl209tWYbg'
    }

    return config;
})

export type Response<T> = Promise<AxiosResponse<T>>;

export {
    axiosService
};