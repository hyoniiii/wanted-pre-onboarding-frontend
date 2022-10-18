import styled from "styled-components";

export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f7f7f6;

  .logout {
    position: absolute;
    top: 18px;
    right: 10px;
    width: 70px;
    height: 30px;
    border: none;
    border-radius: 5px;
    background-color: #e5e5e5;
    cursor: pointer;
  }

  .todo-form {
    width: 82%;
    height: 100px;
  }

  .flexRow {
    display: flex;
    flex-direction: row;
  }
  .todo-list {
    width: 80vw;
    max-width: 600px;
    margin: 60px 40px 60px 40px;
  }

  .todo-list > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-width: 300px;
    height: 50px;
    border-radius: 5px;
    padding: 0 10px;
    margin: 10px auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .done > div{
    text-decoration: line-through;
  }
`;
