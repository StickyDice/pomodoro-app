import React from "react";
import styles from "./login.module.sass";
import { LoginForm } from "../../forms/LoginForm";

export function Login() {
   return (
      <div className={styles.background}>
         <div className={styles.pos}>
            <p className={styles.pomodoro}>pomodoro_box</p>
            <div className={styles.modal}>
               <h1 className={styles.title}>Совсем чуть-чуть и можем начинать!</h1>
               <LoginForm/>
            </div>
         </div>
         <p className={styles.rights}>Skillbox® | 2023</p>
      </div>
   );
}
