import React from "react";
import styles from "./Footer.module.css"

const Footer =()=>{
    return (
    <div className={styles.footer}>
        <p>Made with ❤️ at nFactorial in 2022.</p>
        <p style ={{opacity: 0.5}}>Credits: icons from Icons8.</p>
    </div>)
}

export default Footer