import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    accept: "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTM2MjhjYjlhNTc1OGEwODE0MzFiMWJlMDQwNmVhZSIsInN1YiI6IjY1ZGY3YzUyOTYzODY0MDEyZmQ3MzNhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ASRW238cwCwklXXOK8aE28Yz8gTjZEeiRC4BaMFMqH0",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
    config.params = config.params || {};
    config.params["api_key"] = apiKey;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
