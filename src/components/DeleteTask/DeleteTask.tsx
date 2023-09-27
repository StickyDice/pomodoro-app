import React from "react";
import styles from "./deletetask.module.sass";
import { createPortal } from "react-dom";
import { EIcons, Icon } from "../Icon";
import { useDropdownActions } from "../../hooks/dropdownActionsHook";
import { useAppSelector } from "../../store/hooks";

export function DeleteTask() {
   const { isOpen, taskName } = useAppSelector(state => state.deleteModal.taskInfo);
   const { deleteHandler } = useDropdownActions(taskName);
   const root = document.getElementById("deleteTask__root");
   if (!root) {
      return null;
   }
   return (
      <>
         {isOpen && createPortal(
            <div className={styles.background}>
               <div className={styles.pos}>
                  <div className={styles.modal}>
                     <h3 className={styles.title}>Удалить задачу?</h3>
                     <button className={styles.deleteButton} onClick={deleteHandler}>Удалить</button>
                     <button className={styles.cancelButton}>Отмена</button>
                     <button className={styles.cancelButtonTop}>
                        <Icon name={EIcons.closeIcon}/>
                     </button>
                  </div>
               </div>
            </div>, root
         )
         }
      </>
   );
}
