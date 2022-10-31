import React, { useEffect } from 'react'

const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
   
   const updateTodo=(title,id, completed)=>{
        const newTodo = todos.map((todo)=>
            todo.id === id ? {title, id, completed} : todo
        );
        setTodos(newTodo);
        setEditTodo("")
   };

   useEffect(()=>{
     if(editTodo){
        setInput(editTodo.title);
     } else {
        setInput('');
     }
   }, [setInput, editTodo]);

    const onInputChange=(e)=>{
        setInput(e.target.value);
   };

const onFormSubmit=(event)=>{
    event.preventDefault();
    if(!editTodo){
        setTodos([...todos, {title: input, completed: false}]);
    setInput("");
    } else {
        updateTodo(input, editTodo.id, editTodo.completed)
    }
    
}

  return (
    <div> 
        <center>
        <form onSubmit={onFormSubmit}>
            <input type="text" 
            value={input}
            onChange={onInputChange}
            required/>&nbsp;
            <button className='addbtn' type='submit'>{editTodo ? "Ok" : "Add"}</button>
        </form>
        </center>
    </div>
  )
}

export default Form;