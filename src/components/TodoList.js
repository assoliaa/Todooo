import React from "react";
import ToDo from "./OneToDo";


const ToDoList =({filteredTodos, setTodos, Todos})=>{
    return(<>
    {filteredTodos.map((todo, index)=>(<ToDo 
        todo ={todo}  
        setTodos={setTodos} 
        Todos={Todos}
        key={todo.id}/>))}
    </>)
}

export default ToDoList
  