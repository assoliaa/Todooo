import React from "react";
import styles from "./MoveTo.module.css"

function MoveToTrash({Todos, setTodos, todo}) {
    const changestatus =(id)=>{
        const ItemTo =Todos.find((todo)=>todo.id===id)
        ItemTo.status="Trash"
        const newTodos=Todos.filter(item=>item.id!==id);
        setTodos([...newTodos, ItemTo])
    }
    return (<button className={styles.trash}onClick={()=>changestatus(todo.id)}><img src="TrashBin.png"/>Move To Trash</button>
    );
  }
  
export default MoveToTrash;