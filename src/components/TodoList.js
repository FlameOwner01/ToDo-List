import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faPlusSquare } from '@fortawesome/free-solid-svg-icons';



const Lista = ({setInputText, todos, setTodos, inputText}) => {

    const inputTextHandeler = (e) =>{ 
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) =>{
        e.preventDefault();
        if(inputText !== ''){
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 100}
        ]);
        }else{
            alert('Cannot submit empty field')
        }
        setInputText('');
    };

    
    return  (
        <form className= "bg">
            <input value = {inputText} type="text" className ="todo-input" onChange = {inputTextHandeler}/>
            <button onClick= {submitTodoHandler} className="todo-button" type="submit">
            <FontAwesomeIcon icon ={faPlusSquare} className="fa-3x fa-plus-square "></FontAwesomeIcon>
            </button>
        </form>
    );
};


export default Lista;