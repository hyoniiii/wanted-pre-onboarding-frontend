import { instance } from "./core/instance";

export const authAPI = {
    signin: (data) => instance.post("/auth/signin", data),
    signup: (data) => instance.post("/auth/signup", data)
};

export const todoAPI = {
    getTodos: () => instance.get("/todos"),
    createTodo: (data) => instance.post("/todos", data),
    updateTodo: (id, data) => instance.put(`/todos/${id}`, data),
    deleteTodo: (id) => instance.delete(`/todos/${id}`),
};