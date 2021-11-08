import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({text, todos, todo, setTodos, }) => {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
};
    const completeHandler = () =>{
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;  
        })
        );
    }

    return(
            <div className="todo">
                <li className = {`todo-item ${todo.completed ? "completed" : ""}`} >{text}</li>
                    <button className="trash-btn" onClick = {deleteHandler}><FontAwesomeIcon className ="fas fa-trash" icon ={faTrash} ></FontAwesomeIcon></button>
                    <button className="complete-btn" onClick = {completeHandler} ><FontAwesomeIcon className ="fas fa-check" icon ={faCheckSquare}></FontAwesomeIcon></button>        
            </div>
    );
};

export default TodoItem;
