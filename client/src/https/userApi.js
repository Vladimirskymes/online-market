import {$host, $authorization} from "./index"
import jwt_decode from "jwt-decode"
export const registration = async (email, password) => {
    const {data} =  await $host.post("api/user/registration", {email, password, role: "ADMIN"});
    localStorage.setItem("token", data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const {data} =  await $host.post("api/user/login", {email, password});
    localStorage.setItem("token", data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} =  await $authorization.get("api/user/authorization");
    localStorage.setItem("token", data.token)
    return jwt_decode(data.token)
}