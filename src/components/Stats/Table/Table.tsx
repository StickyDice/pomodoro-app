import React from "react";
import styles from "./table.module.sass";
import tomato from "../../../images/emptyStatsTomato.svg";

export function Table() {
   return (
      <div className={styles.gridContainer}>
         <div className={styles.topContainer}>
            <div className={styles.topLeftContainer}>
               <div className={styles.box1}>
                  <h2 className={styles.boxTitle}>Суббота</h2>
                  <p>Нет данных</p>
               </div>
               <div className={styles.box3}>
                  <img className={styles.emptyTomato} src={tomato} alt="Помидорка"/>
               </div>
            </div>
            <div className={styles.box2}>stats</div>
         </div>
         <div className={styles.box4}>
            <h2 className={styles.boxTitle}>Фокус</h2>
            <p>0%</p>
         </div>
         <div className={styles.box5}>
            <h2 className={styles.boxTitle}>Время на паузе</h2>
            <p>0м</p>
         </div>
         <div className={styles.box6}>
            <h2 className={styles.boxTitle}>Остановки</h2>
            <p>0</p>
         </div>
      </div>
   );
}
