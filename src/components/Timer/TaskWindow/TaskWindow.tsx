import React, { useEffect, useState } from "react";
import styles from "./taskwindow.module.sass";
import { TaskUI } from "./TaskUI";
import classNames from "classnames";
import { useAppSelector } from "../../../store/hooks";

export function TaskWindow() {
   const [ isRunning, setIsRunning ] = useState(false);
   const headerClasses = classNames(styles.windowHeader, isRunning ? styles.windowHeaderRun : "");
   // Getting tasks list from store
   const todoTaskList = useAppSelector(state => state.tasksList.tasksList);
   const title = todoTaskList.length !== 0 ? todoTaskList[0].task : "";
   const tomatoes = todoTaskList.length !== 0 ? todoTaskList[0].tomatoes : 0;
   return (
      <div className={styles.window}>
         <header className={headerClasses}>
            <h2 className={styles.title}>{title}</h2>
            <span>{tomatoes ? `Помидор ${tomatoes}` : ""}</span>
         </header>
         <TaskUI isRunning={isRunning} setIsRunning={setIsRunning}/>
      </div>
   );
}
