import axios from "axios";

export const instance = axios.create({
    baseURL: "https://pre-onboarding-selection-task.shop"
});

instance.interceptors.request.use((config) => {
    if (config.url === "/auth/signup" || config.url === "/auth/signin") {
        return config;
    }

    if (localStorage.getItem("token")) {
        config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
    } else {
        config.headers["Authorization"] = null;
    }

    return config;
})