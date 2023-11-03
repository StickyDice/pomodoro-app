import React from "react";
import styles from "./tasklist.module.sass";
import { ITasks } from "../../../../store/features/tasksList/tasksListSlice";
import { nanoid } from "nanoid";
import { ListItem } from "./ListItem";

export function TaskList( { tasksList }: ITasks ) {
   return (
      <div>
         <ul className={styles.list}>
            {tasksList.map(( item ) =>
               <ListItem
                  key={nanoid()}
                  item={item}
               />)}
         </ul>
         <span className={styles.totalTime}>25 мин</span>
      </div>
   );
}
