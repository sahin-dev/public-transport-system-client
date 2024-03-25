import axios from "axios";
import { useContext } from "react";
import { BusContextData } from "../Context/BusContext";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:3000/'
});

const UsePrivateApi = () => {
    const { userLog } = useContext(BusContextData);

    
    instance.interceptors.request.use(
        (config) => {
            const token = userLog.token;
            if (token) {
                config.headers['secret'] = token; 
                config.headers['access-control-allow-origin']="*";
                config.headers['access-control-allow-headers'] = 'X-Requested-With,Content-Type';
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    
    return instance;
};

export default UsePrivateApi;
