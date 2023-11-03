import React, { SyntheticEvent, useState } from "react";
import styles from "./stats.module.sass";
import { createPortal } from "react-dom";
import { Table } from "./Table";
import classNames from "classnames";
import { MySelect, selectOptions } from "../MySelect";
import { MyOption } from "../MySelect/MyOption";

export function Stats() {
   const classes = classNames("container", styles.container);
   const [ selected, setSelected ] = useState("current");
   const root = document.getElementById("statistic__root");

   const handleOptionClick = ( event: SyntheticEvent ) => {
      if (event.target instanceof HTMLDivElement && selected !== event.target?.dataset.value && event.target?.dataset.value) {
         setSelected(event.target.dataset.value);
      }
   };

   if (!root) {
      return null;
   }

   return (
      <>
         {createPortal(
            <div className={classes}>
               <div className={styles.top}>
                  <h1 className={styles.title}>Ваша активность</h1>
                  <MySelect selected={selected}>
                     <MyOption value="current" selected={selected} handleClick={handleOptionClick}>{selectOptions.current}</MyOption>
                     <MyOption value="previous" selected={selected} handleClick={handleOptionClick}>{selectOptions.previous}</MyOption>
                     <MyOption value="beforePrevious" selected={selected} handleClick={handleOptionClick}>{selectOptions.beforePrevious}</MyOption>
                  </MySelect>
               </div>
               <Table />
            </div>
            , root)}
      </>
   );
}
