import { instance } from "./core/instance";

export const authAPI = {
    signin: (data) => instance.post("/auth/signin", data),
    signup: (data) => instance.post("/auth/signup", data)
};