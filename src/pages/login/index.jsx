import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authAPI } from "../../server/api";
import { StyledAuth } from "./styled";
import useInput from "../../hooks/useInput";

export const Login = () => {
    const email = useInput();
    const password = useInput();

    const emailValue = email.value;
    const passwordValue = password.value;

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/todo");
        }
    }, [navigate]);

    const emailValidation =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    const account = {
        email: emailValue,
        password: passwordValue,
    };

    const loginStatus = (e) => {
        e.preventDefault();
        if (emailValidation.test(emailValue)) {
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
                    id="email"
                    {...email}
                    placeholder="이메일"
                    required
                />
                <label>Password</label>
                <input
                    type={"password"}
                    id="password"
                    {...password}
                    placeholder="비밀번호"
                    required
                />
                {emailValidation.test(emailValue) && passwordValue.length >= 8 ? (
                    <button type="submit">로그인</button>
                ) : (
                    <button disabled>로그인</button>
                )}
                <span onClick={() => navigate("/signup")}>회원가입하기</span>
            </form>
        </StyledAuth>
    );
};
