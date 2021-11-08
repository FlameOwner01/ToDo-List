import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({text, todos, todo, setTodos, }) => {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
};
 

    return(
            <div className="todo">
                <li className ="todo-item">{text}</li>
                    <button className="trash-btn" onClick = {deleteHandler}><FontAwesomeIcon className ="fas fa-trash" icon ={faTrash} ></FontAwesomeIcon></button>        
            </div>
    );
};

export default TodoItem;
