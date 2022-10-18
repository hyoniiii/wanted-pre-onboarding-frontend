import { useRef, useState } from "react";
import { todoAPI } from "../../../server/api";
import { MdOutlineCircle, MdCheckCircleOutline, MdModeEdit, MdCheck, MdDelete, MdClose } from "react-icons/md";
import { StyledTodo } from "./styled";

export const Todo = ({ todo, todos, setTodos }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
  const input = useRef(null);
  const [value, setValue] = useState(todo.todo);

  const handleCompleteTodo = () => {
    todoAPI
      .updateTodo(todo.id, {
        todo: value,
        isCompleted: !isCompleted,
      })
      .then(({ data }) => {
        setTodos(
          todos.map((v) => {
            return v.id !== todo.id ? v : data;
          })
        );
      });
  };

  const handleUpdateTodo = () => {
    todoAPI
      .updateTodo(todo.id, {
        todo: value,
        isCompleted: isCompleted,
      })
      .then(({ data }) => {
        setTodos(
          todos.map((v) => {
            return v.id !== todo.id ? v : data;
          })
        );
        setIsUpdate(false);
      });
  };

  const handleDeleteTodo = () => {
    todoAPI.deleteTodo(todo.id).then(() => {
      setTodos(todos.filter((v) => v.id !== todo.id));
    });
  };

  return (
    <StyledTodo>
      {isUpdate ? (
        isCompleted ? (
          <MdCheckCircleOutline
            className="icon"
            onClick={() => {
              setIsCompleted(false);
            }}
          />
        ) : (
          <MdOutlineCircle
            className="icon"
            onClick={() => {
              setIsCompleted(true);
            }}
          />
        )
      ) : isCompleted ? (
        <MdCheckCircleOutline
          className="icon"
          onClick={() => {
            handleCompleteTodo();
            setIsCompleted(false);
          }}
        />
      ) : (
        <MdOutlineCircle
          className="icon"
          onClick={() => {
            handleCompleteTodo();
            setIsCompleted(true);
          }}
        />
      )}

      {isUpdate ? (
        <input
          type="text"
          defaultValue={value}
          ref={input}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <span>{todo.todo}</span>
      )}

      <div className="button-box">
        <button
          onClick={() => {
            !isUpdate ? setIsUpdate(true) : handleUpdateTodo();
          }}
        >
          {!isUpdate ? <MdModeEdit /> : <MdCheck />}
        </button>

        {isUpdate ? (
          <button
            onClick={() => {
              setIsUpdate(false);
              setIsCompleted(todo.isCompleted);
            }}
          >
            <MdClose />
          </button>
        ) : (
            <button onClick={handleDeleteTodo}><MdDelete /></button>
        )}
      </div>
    </StyledTodo>
  );
};
