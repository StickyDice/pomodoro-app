import React from "react";
import styles from "./yaxis.module.sass";
import { nanoid } from "nanoid";

const timeIntervals = [ "1 ч 40 мин", "1 ч 15 мин", "50 мин", "25 мин" ];

export function YAxis() {
   return (
      <div className={styles.yAxis}>
         {timeIntervals.map(( interval ) =>
            <div key={nanoid()} className={styles.lineContainer}>
               <div className={styles.line}></div>
               <span className={styles.time}>{interval}</span>
            </div>
         )}
      </div>
   );
}
