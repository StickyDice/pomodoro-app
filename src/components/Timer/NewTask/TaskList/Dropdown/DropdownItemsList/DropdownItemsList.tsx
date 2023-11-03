import React, { useState } from "react";
import styles from "./dropdownitemslist.module.sass";
import { EIcons, Icon } from "../../../../../Icon";
import { nanoid } from "nanoid";
import classNames from "classnames";

export function DropdownItemsList( { setIsModalOpen }: { setIsModalOpen: (state: boolean) => void } ) {
   const spanClasses = classNames(styles.itemText, "itemAction");

   function deleteHandler() {
      setIsModalOpen(true);
   }

   return (
      <>
         <ul className={styles.dropdownList}>
            <li className={styles.dropdownListItem} key={nanoid()}>
               <Icon name={EIcons.increaseIcon} size={[ 18, 18 ]}/>
               <span className={spanClasses}>Увеличить</span>
            </li>
            <li className={styles.dropdownListItem} key={nanoid()}>
               <Icon name={EIcons.decreaseIcon} size={[ 18, 18 ]}/>
               <span className={spanClasses}>Уменьшить</span>
            </li>
            <li className={styles.dropdownListItem} key={nanoid()}>
               <Icon name={EIcons.editIcon} size={[ 18, 18 ]}/>
               <span className={spanClasses}>Редактировать</span>
            </li>
            <li className={styles.dropdownListItem} key={nanoid()} onClick={deleteHandler}>
               <Icon name={EIcons.deleteIcon} size={[ 18, 18 ]}/>
               <span className={spanClasses}>Удалить</span>
            </li>
         </ul>
      </>
   );
}
