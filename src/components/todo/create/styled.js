import styled from "styled-components";

export const StyledTodoForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  margin-top: 20px;

  h2 {
    text-align: center;
    margin-right: 20px;
  }
  input {
    width: 50vw;
    min-width: 150px;
    max-width: 300px;
    height: 30px;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    padding: 0 10px;
  }

  button {
    width: 70px;
    height: 30px;
    border: none;
    border-radius: 5px;
    margin-left: 10px;
    background-color: #2364ef;
    color: #e5ffff;
    cursor: pointer;
    &:disabled {
      background-color: #e5e5e5;
      cursor: not-allowed;
      color:#b5b5b5;
    }
  }
`;
