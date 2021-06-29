import axios from "axios"

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const $authorization = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = conf => {
    conf.headers.authorization = `Bearer ${localStorage.getItem("token")}`
    return conf
}

$authorization.interceptors.request.use(authInterceptor);
export {$host, $authorization}