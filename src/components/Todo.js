import React from "react";
import TodoItem from "./TodoItem";

const Items = ({ todos, setTodos}) => {



    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo) => (
                    <TodoItem setTodos={setTodos} todo = {todo} todos = {todos} text = {todo.text} key = {todo.id} />
                ))}
            </ul>
        </div>
    );

};

export default Items;