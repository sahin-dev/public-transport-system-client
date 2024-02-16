

import axios from "axios";

const publicUrl = axios.create({
    baseURL:"http://127.0.0.1:3000/"
})

const PublicApi = () => {

    return publicUrl
};

export default PublicApi;