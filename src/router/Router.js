import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/login";
import { Join } from "../pages/join";
import { Main } from "../pages/main";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Join />} />
            <Route path="/todo" element={<Main />} />
        </Routes>
    )
}