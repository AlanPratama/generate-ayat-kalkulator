import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://equran.id/api/v2",
    timeout: 50000
})

export default axiosInstance