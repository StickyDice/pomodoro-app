import React from "react";
import styles from "./table.module.sass";
import tomato from "../../../images/emptyStatsTomato.svg";
import activeTomato from "../../../images/activeTomato.svg";
import classNames from "classnames";
import { Chart } from "./Chart";
import { useTodayData } from "../../../hooks/useTodayData";
import { useAppSelector } from "../../../store/hooks";

export function Table() {
   const bottomTitle = classNames(styles.boxTitle, styles.bottomTitle);
   const bottomLast = classNames(styles.bottom, styles.bottomLast);
   const todayLetters = new Date().toLocaleString("ru", { weekday: "long" }).split("");
   todayLetters[0] = todayLetters[0].toUpperCase();
   const today = todayLetters.join("");
   // const {} = useAppSelector(state => state.weekData.current);
   const { workTime, tomatoes, pausedTime, focus, focusTime, halts } = useAppSelector(state => state.todayData);
   // const [ workTime, tomatoes, pausedTime, focus, halts ] = useTodayData();
   if (workTime) {
      const workTimeInHours = workTime / 60 === 0 ? `${Math.floor(workTime / 60)} часов ${workTime % 60} минут` : `${workTime % 60} минут`;
   }
   return (
      <div className={styles.gridContainer}>
         <div className={styles.topContainer}>
            <div className={styles.topLeftContainer}>
               <div className={styles.box1}>
                  <h2 className={styles.boxTitle}>{today}</h2>
                  <p className={styles.activity}>{workTime ? <p>Вы работали над задачами в&nbsp;течение <span className={styles.workTime}>{workTime} минуты</span></p> : "Нет данных"}</p>
               </div>
               <div className={styles.box3}>
                  {tomatoes === 0
                     ?
                     <img className={styles.emptyTomato} src={tomato} alt="Помидорка"/>
                     :
                     <>
                        <div className={styles.activeTomatoContainer}>
                           <img className={styles.activeTomato} src={activeTomato} alt="Помидорка"/>
                           <p className={styles.tomatoesCount}>x {tomatoes}</p>
                        </div>
                        <p className={styles.tomatoBanner}>{tomatoes} помидора</p>
                     </>
                  }
               </div>
            </div>
            <div className={styles.box2}><Chart/></div>
         </div>
         <div className={styles.bottomContainer}>

            <div className={styles.box4}>
               <h2 className={bottomTitle}>Фокус</h2>
               <p className={styles.bottom}>{focus}%</p>
            </div>
            <div className={styles.box5} style={tomatoes !== 0 ? {backgroundColor: "#DFDCFE", stroke: "#9C97D7"} : undefined}>

               <h2 className={bottomTitle}>Время на паузе</h2>
               <p className={styles.bottom}>{pausedTime}м</p>
            </div>
            <div className={styles.box6}>
               <h2 className={bottomTitle}>Остановки</h2>
               <p className={bottomLast}>{halts}</p>
            </div>
         </div>
      </div>
   );
}
