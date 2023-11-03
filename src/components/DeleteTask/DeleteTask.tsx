import React from "react";
import styles from "./deletetask.module.sass";
import { createPortal } from "react-dom";
import { EIcons, Icon } from "../Icon";
import { useDropdownActions } from "../../hooks/useDropdownAction";

interface IDeleteTaskProps {
   isOpen: boolean;
   taskName: string;
   changeOpen: ( changeTo: boolean ) => void;
}

export function DeleteTask( { isOpen, taskName, changeOpen }: IDeleteTaskProps ) {
   // const dispatch = useAppDispatch();
   // const { isOpen, taskName } = useAppSelector(state => state.deleteModal.taskInfo);
   const { deleteHandler } = useDropdownActions(taskName);
   const root = document.getElementById("deleteTask__root");

   function onClose() {
      changeOpen(false);
   }

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
                     <button className={styles.cancelButton} onClick={onClose}>Отмена</button>
                     <button className={styles.cancelButtonTop} onClick={onClose}>
                        <Icon name={EIcons.closeIcon}/>
                     </button>
                  </div>
               </div>
            </div>, root
         )}
      </>
   );
}
