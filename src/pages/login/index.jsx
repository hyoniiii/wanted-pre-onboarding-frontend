import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authAPI } from "../../server/api";
import { StyledAuth } from "./styled";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/todo");
        }
    }, [navigate]);

    const emailValidation =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    const account = {
        email: email,
        password: password,
    };

    const loginStatus = (e) => {
        e.preventDefault();
        if (emailValidation.test(email)) {
            authAPI
                .signin(account)
                .then((response) => {
                    if (response.status === 200) {
                        localStorage.setItem("token", response.data["access_token"]);
                        navigate("/todo");
                    }
                })
                .catch(({ response }) => {
                    if (response.data.statusCode === 401) {
                        alert("비밀번호가 일치하지 않습니다.");
                    }
                    if (response.data.statusCode === 404) {
                        alert("이메일 또는 비밀번호가 일치하지 않습니다.");
                    }
                });
        } else {
            alert("이메일 형식에 맞지 않습니다");
        }
    };

    return (
        <StyledAuth>
            <form onSubmit={(e) => loginStatus(e)}>
                <label>Email</label>
                <input
                    type={"text"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="이메일"
                    required
                />
                <label>Password</label>
                <input
                    type={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="비밀번호"
                    required
                />
                {emailValidation.test(email) && password.length >= 8 ? (
                    <button type="submit">로그인</button>
                ) : (
                    <button disabled>로그인</button>
                )}
                <span onClick={() => navigate("/signup")}>회원가입하기</span>
            </form>

        </StyledAuth>
    );
};
