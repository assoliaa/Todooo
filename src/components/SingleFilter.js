import React from "react";
import { useState } from "react";
import styles from './SingleFilter.module.css'

function SingleFilter({setActiveStatus, filter, ActiveStatus}) {
    const isbtn =filter===ActiveStatus;

    const handleClick=(status)=>{
        setActiveStatus(status)  
    }
    return ( 
        <button className={styles.singlefilter}
        onClick={()=>handleClick(filter)}
        style ={{background:isbtn?"rgba(8, 30, 52, 0.42)":"", transparent:isbtn? 0.05: ""}}><p style ={{color:isbtn? "white" :"black"}}>{filter}</p></button>
    );
  }
  
export default SingleFilter;