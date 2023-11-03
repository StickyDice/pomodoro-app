import React, { useState } from "react";
import styles from "./newtask.module.sass";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addTask } from "../../../store/features/tasksList/tasksListSlice";
import { TaskList } from "./TaskList";

export function NewTask() {
   const [ input, setInput ] = useState("");
   const tasks = useAppSelector(state => state.tasksList);
   const dispatch = useAppDispatch();

   function handleClick( event: React.SyntheticEvent ) {
      event.preventDefault();
      if (input.length !== 0) {
         dispatch(addTask(input));
         setInput("");
      }
   }

   function onChange( event: React.FormEvent<HTMLInputElement> ) {
      setInput(event.currentTarget.value);
   }

   return (
      <div>
         <form className={styles.taskForm}>
            <input className={styles.input} type="text" placeholder="Название задачи" value={input}
                   onChange={onChange}/>
            <button className={styles.button} onClick={handleClick}>Добавить</button>
         </form>
         {tasks.tasksList.length > 0 && <TaskList tasksList={tasks.tasksList}/>}
      </div>
   );
}
