import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { todoAPI } from "../../server/api";
import { Todo } from "../../components/todo/readUpdateDelete";
import { TodoForm } from "../../components/todo/create";
import { StyledMain } from "./styled";

export const Main = () => {
    const [todos, setTodos] = useState([]);

    const navigate = useNavigate();

    const handleGetTodos = () => {
        todoAPI.getTodos().then(({ data }) => {
            setTodos(data);
        });
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    useEffect(() => {
        if (localStorage.getItem("token")) {
            handleGetTodos();
        } else {
            navigate("/");
        }
    }, [navigate]);

    return (
        <StyledMain>
            <button className="logout" onClick={handleLogout}>
                로그아웃
            </button>

            <div className="todo-form">
                <TodoForm todos={todos} setTodos={setTodos} />
            </div>

            <div className="flexRow">
                <div className="todo-list">
                    <h2>해야 할 일</h2>
                    {todos?.map((todo) => {
                        return !todo.isCompleted ? (
                            <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
                        ) : null;
                    })}
                </div>
                <div className="todo-list done">
                    <h2>완료된 일</h2>
                    {todos?.map((todo) => {
                        return todo.isCompleted ? (
                            <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} className="done" />
                        ) : null;
                    })}
                </div>
            </div>
        </StyledMain>
    );
};
