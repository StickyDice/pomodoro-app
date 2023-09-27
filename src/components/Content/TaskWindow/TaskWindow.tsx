import React, { useState } from 'react';
import styles from './taskwindow.module.sass';
import { TaskUI } from "./TaskUI";
import classNames from "classnames";

export function TaskWindow() {
   const [isRunning, setIsRunning] = useState(false);
   const headerClasses = classNames(styles.windowHeader, isRunning ? styles.windowHeaderRun : '');
   return (
      <div className={styles.window}>
         <header className={headerClasses}>
            <h2 className={styles.title}>Сверстать сайт</h2>
            <span>Помидор 1</span>
         </header>
         <TaskUI isRunning={isRunning} setIsRunning={setIsRunning}/>
      </div>
   );
}
