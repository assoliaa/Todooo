import React, { useState } from "react";
import MoveToTrash from "./MoveToTrash";
import DeleteForever from "./DeleteForever";
import styles from "./OneTodo.module.css"


function ToDo({todo, setTodos, Todos}) {
    const[clicked, setclicked] =useState(false);
    const[marked, setmarked] =useState(false);
     
    
  
    const changestatus =(id)=>{
        const ItemTo =Todos.find((todo)=>todo.id===id)
        if(ItemTo.status==="To Do"){
            ItemTo.status="Done"
            const newTodos=Todos.filter(item=>item.id!==id);
            setTodos([...newTodos, ItemTo])
        }
        else if(ItemTo.status==="Done"){
            ItemTo.status="To Do"
            const newTodos=Todos.filter(item=>item.id!==id);
            setTodos([...newTodos, ItemTo])
        }
    }   
    const handlechange =(item)=>{
        setmarked(!marked)
        if(marked){
            changestatus(item.id)
        }
    }
    
    
    console.log(todo.status=="Done")
    
    return(<div className={styles.column}><div className={(todo.status!=="Done") && (clicked || marked)? styles.Highlighted:styles.Todo}>
        <button style={{border:"none", padding:0}} onClick={()=>setclicked(!clicked)}><img src ="Button.png"/></button>
        <input type ="checkbox" className={styles.checkbox} 
          checked = {(todo.status==="Done" && !marked) || (marked && todo.status==="To Do") || (clicked && todo.status==="Trash")} 
          onChange={()=>handlechange(todo)}/>
        <p className={((todo.status==="Done" && !marked) || (clicked && todo.status==="Trash") || (marked && todo.status==="To Do"))? styles.marked:styles.content}>{todo.content}</p>
        </div>
        {(todo.status ==="To Do" || todo.status==="Done") && clicked ?<MoveToTrash Todos={Todos} setTodos={setTodos} todo={todo}/>:""}
        {todo.status ==="Trash" && clicked?<DeleteForever Todos={Todos} setTodos={setTodos} todo={todo}/>:""}
        </div>)
  }
  
export default ToDo;