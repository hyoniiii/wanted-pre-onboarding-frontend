import styled from "styled-components";

export const StyledTodo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;

  .icon {
    font-size: 30px;
    margin-right: 10px;
    color: #2364ef;
  }

  span {
    font-size: 20px;
  }

  input {
    width: 30vw;
    height: 30px;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    padding: 0 10px;
  }

  .button-box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100px;

    button {
      width: 40px;
      height: 30px;
      border: none;
      border-radius: 5px;
      background-color: #e5e5e5;
      cursor: pointer;
    }
  }
`;
