import axios from "axios";
import { loadState } from "../lib/storage";

const requist = axios.create({ baseURL: "http://localhost:3000" });

requist.interceptors.request.use(
  (config) => {
    const token = loadState("user");
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token?.accesToken}`,
    };

    return config;
  },
  (error) =>  Promise.reject(error)
  
);
// requist.interceptors.response.use(
//   (response) => {
//     if (response.status == 401) {
//       localStorage;
//       return (window.location.pathname = "/");
//     }
//     return response;
//   },
//   (error) => Promise.reject(error)
// );

export {requist};
