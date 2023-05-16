import React, { useState } from "react";
import styles from './Delete.module.css'

function DeleteForever({Todos, setTodos, todo}) {
   
   const deleteit =(id)=>{
    const newTodos=Todos.filter(item=>item.id!==id);
    setTodos([...newTodos])
  }
  const changestatus =(id)=>{
    const ItemTo =Todos.find((todo)=>todo.id===id)
    ItemTo.status="To Do"
    const newTodos=Todos.filter(item=>item.id!==id);
    setTodos([...newTodos, ItemTo])
  }
  
    return (
      <div className={styles.deletebtn}>
        <button className={styles.delete}  onClick={()=>deleteit(todo.id)}><img src="TrashBin.png"/>Delete Forever</button>
        <button className={styles.moveback}  onClick={()=>changestatus(todo.id)}><img src="Checked mark.png"/>Move back to Todo</button>
      </div>
    );
  }
  
export default DeleteForever;