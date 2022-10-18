import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/login";
import { Join } from "../pages/join";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Join />} />
        </Routes>
    )
}