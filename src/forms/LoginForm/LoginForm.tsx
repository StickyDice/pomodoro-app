import React from "react";
import { Formik, Form, Field, FormikErrors } from "formik";
import styles from "../../components/Login/login.module.sass";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { login } from "../../store/features/login/loginSlice";

interface IUserDataProps {
   username: string;
   email: string;
   checkbox: boolean;
}

export function LoginForm() {
   const dispatch = useAppDispatch();
   const initialValues: IUserDataProps = {
      username: "",
      email: "",
      checkbox: false,
   };
   return (
      <Formik
         validateOnChange
         initialValues={initialValues}
         onSubmit={( values, actions ) => {
            console.log({ values, actions });
            dispatch(login({ username: values.username, email: values.email }));
         }}
         validate={( values: IUserDataProps ) => {
            const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
            const errors: FormikErrors<IUserDataProps> = {};
            if (!values.username) {
               errors.username = "Required";
            } else if (values.username.length < 3) {
               errors.username = "Must be at least 3 characters";
            }

            if (!values.email) {
               errors.email = "Required";
            } else if (!EMAIL_REGEXP.test(values.email)) {
               errors.email = "Invalid characters";
            }

            if (!values.checkbox) {
               errors.checkbox = "Required";
            }
            return errors;
         }}
         isInitialValid={false}
      >
         {( { isValid } ) => (
            <Form className={styles.form}>
               <Field className={styles.formInput} type="text" name="username" placeholder="Ваше имя"/>

               <Field className={styles.formInput} type="email" name="email" placeholder="E-mail"/>

               <button type="submit" className={styles.signupButton} disabled={!isValid}>Зарегистрироваться</button>

               <div className={styles.checkboxContainer}>
                  <Field className={styles.checkbox} id="agreement" type="checkbox" name="checkbox"/>
                  <label className={styles.checkboxLabel} htmlFor="agreement">Согласен на обработку персональных
                     данных</label>
               </div>
            </Form>
         )}
      </Formik>
   );
}
