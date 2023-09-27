import React, { useState } from "react";
import styles from "./dropdownitemslist.module.sass";
import { EIcons, Icon } from "../../../../../Icon";
import { nanoid } from "nanoid";
import classNames from "classnames";
import { DeleteTask } from "../../../../../DeleteTask";
import { useAppDispatch } from "../../../../../../store/hooks";
import { changeIsOpen, changeTask } from "../../../../../../store/features/deleteModal/deleteModalSlice";
import { Simulate } from "react-dom/test-utils";

export function DropdownItemsList({task}: {task: string}) {
   const spanClasses = classNames(styles.itemText, "itemAction");
   const dispatch = useAppDispatch();

   function deleteHandler() {
      dispatch(changeTask(task));
      dispatch(changeIsOpen(true));
   }

   return (
      <ul className={styles.dropdownList}>
         <li className={styles.dropdownListItem} key={nanoid()}>
            <Icon name={EIcons.increaseIcon} size={18}/>
            <span className={spanClasses}>Увеличить</span>
         </li>
         <li className={styles.dropdownListItem} key={nanoid()}>
            <Icon name={EIcons.decreaseIcon} size={18}/>
            <span className={spanClasses}>Уменьшить</span>
         </li>
         <li className={styles.dropdownListItem} key={nanoid()}>
            <Icon name={EIcons.editIcon} size={18}/>
            <span className={spanClasses}>Редактировать</span>
         </li>
         <li className={styles.dropdownListItem} key={nanoid()} onClick={deleteHandler}>
            <Icon name={EIcons.deleteIcon} size={18}/>
            <span className={spanClasses}>Удалить</span>
         </li>
      </ul>
   );
}
