import React, { useState } from 'react';
import styles from './taskui.module.sass';
import { EIcons, Icon } from "../../../Icon";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { timerAddMinute, timerTicking } from "../../../../store/features/timer/timerSlice";
import { Button } from "./Button";
import classNames from "classnames";

export function TaskUI( { isRunning, setIsRunning }: { isRunning: boolean, setIsRunning: ( arg: boolean ) => void } ) {
   const tasks = useAppSelector(state => state.tasksList.tasksList);
   const timer = useAppSelector(state => state.timer.seconds);
   const dispatch = useAppDispatch();
   const [ userInterval, setUserInterval ] = useState<NodeJS.Timer>();
   const stopButtonClasses = classNames(styles.stopButton, isRunning ? styles.stopButtonActive : '');

   function handleClick( event: React.SyntheticEvent ) {
      event.preventDefault();
      dispatch(timerAddMinute());
   }

   function handleTimerStart( event: React.SyntheticEvent ) {
      event.preventDefault();
      setIsRunning(true);
      setUserInterval(setInterval(() => {
         if (timer === 0) {
            clearInterval(userInterval);
         }
         dispatch(timerTicking());
      }, 1000));
   }

   function handleTimerStop( event: React.SyntheticEvent ) {
      event.preventDefault();
      setIsRunning(false);
      clearInterval(userInterval);
   }

   return (
      <>
         {tasks.length > 0 ? <main className={styles.main}>
               <div className={styles.timer}>
                  <span>{`${Math.floor(timer / 60)}:${timer % 60 < 9 ? `${timer % 60}0` : timer % 60}`}</span>
                  <button className={styles.add} onClick={handleClick}>
                     <Icon name={EIcons.addIcon}/>
                  </button>
               </div>
               <p className={styles.taskDesc}>Задача 1 - <span>{tasks[0].task}</span></p>
               <div className={styles.buttonWrapper}>
                  {isRunning ?
                     <>
                        <Button className={styles.startButton} handleClick={handleTimerStart}>Пауза</Button>
                        <Button className={stopButtonClasses} handleClick={handleTimerStop} disable={false}>Стоп</Button>
                     </>
                     :
                     <>
                        <Button className={styles.startButton} handleClick={handleTimerStart}>Старт</Button>
                        <Button className={stopButtonClasses} handleClick={handleTimerStop} disable={true}>Стоп</Button>
                     </>
                  }
               </div>
            </main> :
            <main className={styles.main}>
               <h2 className={styles.emptyTitle}>Добавьте задание чтобы начать работать</h2>
            </main>
         }
      </>
   )
      ;
}
