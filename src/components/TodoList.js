import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faPlusSquare } from '@fortawesome/free-solid-svg-icons';



const Lista = ({setInputText, todos, setTodos, inputText, setStatus}) => {

    const inputTextHandeler = (e) =>{ 
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) =>{
        e.preventDefault();
        if(inputText !== ''){
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 100}
        ]);
        }
        setInputText('');
    };

    const statusHandler = (e) =>  {
        setStatus(e.target.value)
    }
    return  (
        <form className= "bg">
            <input value = {inputText} type="text" className ="todo-input" onChange = {inputTextHandeler}/>
            <button onClick= {submitTodoHandler} className="todo-button" type="submit">
            <FontAwesomeIcon icon ={faPlusSquare} className="fas fa-plus-square"></FontAwesomeIcon>
            </button>
            <div className= "select">
                <select onChange={statusHandler} name ="todos" className ="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value ="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};


export default Lista;