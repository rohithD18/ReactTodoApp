import React, { useEffect, useState } from 'react';
import Form from './form';
import TodoList from './todo';
import './app.css'

const App = () => {
    const initialState = JSON.parse(localStorage.getItem("todos")) || [];
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState(initialState);
    const [editTodo, setEditTodo] = useState(null);

    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])
  return (
    <center>
    <div className='appstyle'>
        <h1 className='TodoList'>Todo List</h1>
        <div>
            <Form
            input= {input}
            setInput={setInput}
            todos = {todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
            />
        </div>
        <div>
            <TodoList todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}/>
        </div>
       
    </div>
    </center>
  )
}

export default App;