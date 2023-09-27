import React from "react";
import styles from "./login.module.sass";
import { useAppSelector } from "../../store/hooks";
import { createPortal } from "react-dom";
import { useFormik } from "formik";
import { LoginForm } from "../../forms/LoginForm";

interface IUserData {
   name: string;
   email: string;
}

export function Login() {
   const { username } = useAppSelector(state => state.login.user);
   const root = document.getElementById("login__root");
   if (!root) {
      return null;
   }
   return (
      <>
         {username.length === 0 && createPortal(<div className={styles.background}>
            <div className={styles.pos}>
               <p className={styles.pomodoro}>pomodoro_box</p>
               <div className={styles.modal}>
                  <h1 className={styles.title}>Совсем чуть-чуть и можем начинать!</h1>
                  <LoginForm/>
               </div>
            </div>
            <p className={styles.rights}>Skillbox® | 2023</p>
         </div>, root)}
      </>
   );
}
