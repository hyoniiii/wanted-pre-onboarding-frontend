import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authAPI } from "../../server/api";
import { StyledAuth } from "../login/styled";

export const Join = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const confirmPasswordSpan = useRef();

    const navigate = useNavigate();

    const signupAccount = {
        email: email,
        password: password,
    };

    const emailValidation =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    const joinStatus = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            confirmPasswordRef.current.focus();
            confirmPasswordSpan.current.style.display = "block";
        } else {
            authAPI
                .signup(signupAccount)
                .then((response) => {
                    if (response.status === 201) {
                        alert("회원가입이 완료되었습니다.");
                        navigate("/");
                    }
                })
                .catch(({ response }) => {
                    if (response.status === 400) {
                        alert(response.data.message);
                    }
                });
        }
    };

    return (
        <StyledAuth>
            <form onSubmit={(e) => joinStatus(e)}>
                <label>Email</label>
                <input
                    type="text"
                    value={email}
                    ref={emailRef}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="이메일 입력"
                    required
                />
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="비밀번호 입력"
                    ref={passwordRef}
                    required
                />
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setconfirmPassword(e.target.value)}
                    placeholder="비밀번호 확인"
                    ref={confirmPasswordRef}
                    required
                />
                <div className="error-message" ref={confirmPasswordSpan}>
                    비밀번호가 일치하지 않습니다.
                </div>
                {emailValidation.test(email) && password.length >= 8 ? (
                    <button type="submit">JOIN</button>
                ) : (
                    <button disabled>JOIN</button>
                )}
                <span onClick={() => navigate("/")}>로그인하기</span>
            </form>
        </StyledAuth>
    );
};
