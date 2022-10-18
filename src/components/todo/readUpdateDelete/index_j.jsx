import { useRef, useState } from "react";
import { todoAPI } from "../../../server/api";
import { MdOutlineCircle, MdCheckCircleOutline, MdModeEdit, MdDoneOutline } from "react-icons/md";
import { StyledTodo } from "./styled";

export const TodoList = ({ item, items, setItems }) => {
    const [ itemUpdate, setItemUpdate ] = useState(false);
    const [ itemCompleted, setItemCompleted ] = useState(item.itemCompleted);
    const input = useRef(null);
    const [ value, setValue ] = useState(item.item);

    const handleCompleteItem = () => {
        todoAPI
         .updateItem(item.id, {
            item: value,
            itemCompleted: !itemCompleted
         })
         .then(({ data }) => {
            setItems(
                items.map((v) => {
                    return v.id !== item.id ? v : data;
                })
            );
         });
    };

    const handleUpdateItem = () => {
        todoAPI
         .updateItem(item.id, {
            item: value,
            itemCompleted: itemCompleted
         })
         .then(({ data }) => {
            setItems(
                items.map((v) => {
                    return v.id !== item.id ? v : data;
                })
            );
            setItemUpdate(false);
         });
    };

    const handleDeleteItem = () => {
        todoAPI.deleteItem(item.id).then(() => {
            setItems(items.filter((v) => v.id !== item.id));
        });
    };

    return (
        <StyledTodo>
            {itemUpdate ? (
                itemCompleted ? (
                    <MdCheckCircleOutline
                     className="icon"
                     onClick={() => {
                        setItemCompleted(false);
                     }}
                    />
                ) : (
                    <MdOutlineCircle
                     className="icon"
                     onClick={() => {
                        setItemCompleted(true);
                     }}
                    />
                )
            ) : itemCompleted ? (
                <MdCheckCircleOutline
                 className="icon"
                 onClick={() => {
                    handleCompleteItem();
                    setItemCompleted(false);
                 }}
                />
            ) : (
                <MdOutlineCircle
                 className="icon"
                 onClick={() => {
                    handleCompleteItem();
                    setItemCompleted(true);
                 }}
                />
            )}

            {itemUpdate ? (
                <input
                 type="text"
                 defaultValue={value}
                 ref={input}
                 onChange={(e) => setValue(e.target.value)}
                />
            ) : (
                <span>{item.item}</span>
            )}

            <div className="button-box">
                <button
                 onClick={() => {
                    !itemUpdate ? setItemUpdate(true) : handleUpdateItem();
                 }}
                >
                 {!itemUpdate ? <MdModeEdit /> : <MdDoneOutline />}
                </button>

                {itemUpdate ? (
                    <button
                     onClick={() => {
                        setItemUpdate(false);
                        setItemCompleted(item.itemCompleted);
                     }}
                    >
                     취소
                    </button>
                ) : (
                    <button onClick={handleDeleteItem}>삭제</button>
                )}
            </div>
        </StyledTodo>
    )
}