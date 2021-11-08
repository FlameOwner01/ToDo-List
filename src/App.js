import  Lista  from './components/TodoList';
import React, { useState, useEffect } from 'react';
import './styles/style.css';
import Items from './components/Todo';

const App = () =>{

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() =>{
    getLocalTodos();
  }, [])

  useEffect(() => {
   saveLocalTodos();
  }, [todos])  


  const saveLocalTodos = () =>{
      localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getLocalTodos = () =>{
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };

  return (
    <div className ="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      <Lista setInputText = {setInputText} todos ={todos} setTodos ={setTodos} inputText = {inputText}/>
      <Items todos = {todos} setTodos = {setTodos}/>
    </div>
  );
}


export default App;
