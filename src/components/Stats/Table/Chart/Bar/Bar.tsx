import React, { useEffect, useRef } from "react";
import styles from "./bar.module.sass";

interface IBarProps {
   descr: string;
   value: number;
   today: boolean;
}

export function Bar( { descr, value, today }: IBarProps ) {
   const barRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
         if (barRef.current) {
            barRef.current.style.height = `${value * 3.65}px`;
         }
   }, []);

   let backgroundColor;
   let color = "#999999";
   if (today) {
      backgroundColor = "#DC3E22";
      color = "#DC3E22";
   } else if (value === 0) {
      value = 1;
      backgroundColor = "#C4C4C4";
   } else {
      backgroundColor = "#EA8A79";
   }
   return (
      <div className={styles.barContainer}>
         <div ref={barRef} className={styles.bar} style={{ backgroundColor }}></div>
         <span className={styles.barDesc} style={{ color: color }}>{descr}</span>
      </div> // Высота одной минуты 3,65px
   );
}
