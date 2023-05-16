import React from "react";
import { useState } from "react";
import styles from './SingleFilter.module.css'

function Single({}) {
    const[filter, setFilter] =useState(false);
    const handleClick=(status)=>{
        setFilter(!filter)     
    }
    return (
        <div className="buttons">
        <button className="singlefilter" 
        onClick={()=>filterStatus("To Do")}
        style ={{background:filter?"#081E34":"", transparent:filter? 0.05: ""}}><p>To Do</p></button>
        <button className="singlefilter" 
        onClick={()=>filterStatus("Done")}
        style ={{background:filter?"#081E34":"", transparent:filter? 0.05: ""}}><p>Done</p></button>
        <button 
        className="singlefilter" 
        onClick={()=>filterStatus("Trash")}
        style ={{background:filter?"#081E34":"", transparent:filter? 0.05: ""}}><p>Trash</p></button>
        <button onClick={()=>setaddWindow(!addWindow)}className='btnAdd'><img src = "PLus Math.png"/></button>
      </div>
    );
  }
  
export default Single;