import React, { useState } from "react";
import styles from "./listitem.module.sass";
import { Dropdown } from "../Dropdown";
import { useClickOutside } from "../../../../../hooks/useClickOutside";
import { ITask } from "../../../../../store/features/tasksList/tasksListSlice";

export function ListItem( { item }: { item: ITask } ) {
   const [ isDropdownOpen, setIsDropdownOpen ] = useState(false);
   const ref = useClickOutside({ onClose });

   function onClose() {
      setIsDropdownOpen(false);
   }

   function handleClick( event: React.SyntheticEvent ) {
      event.preventDefault();
      setIsDropdownOpen(!isDropdownOpen);
   }

   return (
      <li className={styles.listItem}>
         <>
            <div className={styles.tomatoWrapper}>
               <span className={styles.tomatoCount}>{item.tomatoes}</span>
            </div>
            {item.task}
            <div ref={ref}>
               <Dropdown
                  isOpen={isDropdownOpen}
                  button={
                     <button className={styles.dropdownButton} onClick={handleClick}>
                        <span className={styles.buttonCircle}></span>
                        <span className={styles.buttonCircle}></span>
                        <span className={styles.buttonCircle}></span>
                     </button>
                  }
                  task={item.task}
               />
            </div>
         </>
      </li>
   );
}
