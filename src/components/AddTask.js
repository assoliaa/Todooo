import styles from './AddTask.module.css'
import { useState } from "react";


const AddTask =({content, changeContent, addTask})=>{
    return (
      <div className={styles.addtask}>
        <p className={styles.title}>Add new Todo</p>
        <textarea className={styles.text} onChange={changeContent} value={content} placeholder="Your Text"/>
        <button onClick={addTask} className={styles.addbtn} style={{ textColor: '' }}>Add Task</button>
      </div>
    )
        
}

export default AddTask
