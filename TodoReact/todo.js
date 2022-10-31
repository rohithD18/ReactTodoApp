import React from 'react';

const TodoList = ({todos,index, setTodos, setEditTodo}) => {


   const handleComplete=(todo)=>{
    setTodos(
        todos.map((item)=>{
           if (item.id === todo.id ){
            return {...item, completed : !item.completed};
           }
           return item;
        })
        );
        };

   const handleEdit=({id})=>{
    
        const findTodo = todos.find((todo)=> todo.id === id);
        setEditTodo(findTodo);
   }

    const handleDelete=()=>{
        const newTodos = [...todos];
        newTodos.splice(index,1)
        setTodos(newTodos)
    }

  return (
    <div className='todoslist' ><br></br>
    <center>
        { todos.map((todo)=>(
            <p  key={todo.id}>
                <input id='todosinput'
                type='text'
                value={todo.title}
                style={{ textDecoration: todo.completed ? "line-through" : "" }}
                // className={`list ${todo.completed ? "complete" : ""}`}
                onChange={(event)=> event.preventDefault()} /><br />
                <div>
                    <button onClick={()=>handleComplete(todo)}>Done</button>&nbsp;
                    <button onClick={()=>handleEdit(todo)} >Edit</button>&nbsp;
                    <button onClick={()=> handleDelete(todo)} >X</button><br></br>&nbsp;
                </div>
            </p>
        ))}
        </center>
    </div>
  )
}

export default TodoList;