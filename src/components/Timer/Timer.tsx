import React from "react";
import styles from "./timer.module.sass";
import { InstructionList } from "./InstructionList";
import { NewTask } from "./NewTask";
import { TaskWindow } from "./TaskWindow";
import classNames from "classnames";

export function Timer() {
   const classes = classNames("container", styles.container);
   return (
      <div className={classes}>
         <div className={styles.contentLeft}>
            <InstructionList/>
            <NewTask/>
         </div>
         <TaskWindow/>
      </div>
   );
}
