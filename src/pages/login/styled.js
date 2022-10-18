import styled from "styled-components";

export const StyledAuth = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #f6f6f6;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 300px;
    margin-bottom: 30px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    input {
      width: 180px;
      height: 30px;
      margin: 10px 0;
      border: 1px solid #e0e0e0;
      border-radius: 5px;
      padding: 0 10px;
      &:focus {
        outline: none;
      }
    }

    button {
      width: 200px;
      height: 30px;
      margin: 10px 0;
      border: none;
      border-radius: 5px;
      background-color: #2364ef;
      color: #e5ffff;
      font-weight: bold;
      cursor: pointer;
      padding: 0 10px;
      &:focus {
        outline: none;
      }
      &:active {
        background-color: #e5ffff;
        color: #2364ef;
      }
      &:disabled {
        background-color: #f5f5f5;
        color: #b5b5b5;
        cursor: default;
      }
    }

    .error-message {
      display: none;
      color: #ff0000;
      font-size: 12px;
    }
  }

  p {
    color: #b5b5b5;
    font-size: 12px;
  }

  span {
    font-size:14px;
    color: #2364ef;
    cursor: pointer;
    margin-top: 8px;
    &:hover {
      font-weight:bold;
    }
  }
`;
