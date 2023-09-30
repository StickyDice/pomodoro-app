import React from "react";
import styles from "./table.module.sass";
import tomato from "../../../images/emptyStatsTomato.svg";
import classNames from "classnames";
import { Chart } from "./Chart";

export function Table() {
   const bottomTitle = classNames(styles.boxTitle, styles.bottomTitle);
   return (
      <div className={styles.gridContainer}>
         <div className={styles.topContainer}>
            <div className={styles.topLeftContainer}>
               <div className={styles.box1}>
                  <h2 className={styles.boxTitle}>Суббота</h2>
                  <p className={styles.activity}>Нет данных</p>
               </div>
               <div className={styles.box3}>
                  <img className={styles.emptyTomato} src={tomato} alt="Помидорка"/>
               </div>
            </div>
            <div className={styles.box2}><Chart/></div>
         </div>
         <div className={styles.bottomContainer}>

            <div className={styles.box4}>
               <h2 className={bottomTitle}>Фокус</h2>
               <p className={styles.bottom}>0%</p>
            </div>
            <div className={styles.box5}>
               <h2 className={bottomTitle}>Время на паузе</h2>
               <p className={styles.bottom}>0м</p>
            </div>
            <div className={styles.box6}>
               <h2 className={bottomTitle}>Остановки</h2>
               <p className={styles.bottom}>0</p>
            </div>
         </div>
      </div>
   );
}
