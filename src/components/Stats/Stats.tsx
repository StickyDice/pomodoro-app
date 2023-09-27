import React from "react";
import styles from "./stats.module.sass";
import { createPortal } from "react-dom";
import { Select } from "./Select";
import { Table } from "./Table";
import classNames from "classnames";

export function Stats() {
   const classes = classNames("container", styles.container);
   const root = document.getElementById("statistic__root");
   if (!root) {
      return null;
   }
   return (
      <>
         {createPortal(
            <div className={classes}>
               <div className={styles.top}>
                  <h1 className={styles.title}>Ваша активность</h1>
                  <Select/>
               </div>
               <Table/>
            </div>

            , root)}
      </>
   );
}
