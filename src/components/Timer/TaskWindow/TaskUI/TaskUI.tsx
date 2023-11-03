import React, { useEffect, useMemo, useState } from "react";
import styles from "./taskui.module.sass";
import { EIcons, Icon } from "../../../Icon";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
   initiateInterval,
   resetTimer,
   setActivity,
   timerAddMinute,
   timerTicking
} from "../../../../store/features/timer/timerSlice";
import { Button } from "./Button";
import classNames from "classnames";
import { InProgressButtonSet } from "./InProgressButtonSet";
import { PausedButtonSet } from "./PausedButtonSet";
import { StartButtonSet } from "./StartButtonSet";
import { addTomato } from "../../../../store/features/tasksList/tasksListSlice";
import { getTodayData, setTodayData } from "../../../../utilities/ts/storeTodayData";
import { useTodayData } from "../../../../hooks/useTodayData";
import {
   clearFocusTime,
   increaseFocusTime,
   increaseHalts, increasePausedTime,
   increaseTomatoes,
   increaseWorkTime, setFocus
} from "../../../../store/features/todayData/todayDataSlice";
import { addTime } from "../../../../store/features/weekData/weekDataSlice";

export function TaskUI( { isRunning, setIsRunning }: { isRunning: boolean, setIsRunning: ( arg: boolean ) => void } ) {
   const [ paused, setPaused ] = useState(false);
   const dayNumber = useMemo(() =>  new Date().getDay() as 1 | 2 | 3 | 4 | 5 | 6 | 7, []);
   const [pausedInterval, setPausedInterval] = useState<NodeJS.Timer>();
   const tasks = useAppSelector(state => state.tasksList.tasksList);
   const currentTask = tasks[0];
   const { seconds, isActive, interval, timePassed } = useAppSelector(state => state.timer);
   const dispatch = useAppDispatch();
   const [ userInterval, setUserInterval ] = useState<NodeJS.Timer>();

   useEffect(() => {
      // If isActive, then interval must exist
      if (isActive && interval) {
         setIsRunning(true);
         setUserInterval(interval);
      }
   }, []);

   function handleClick( event: React.SyntheticEvent ) {
      event.preventDefault();
      dispatch(timerAddMinute());
   }

   function createInterval(): NodeJS.Timer {
      const interval = setInterval(() => {
         if (seconds === 0) {
            clearInterval(userInterval);
            dispatch(increaseTomatoes());
            dispatch(setFocus());
            dispatch(clearFocusTime());
         }
         dispatch(increaseFocusTime());
         dispatch(increaseWorkTime());
         dispatch(timerTicking());
         dispatch(addTime(dayNumber));
      }, 1000);
      dispatch(initiateInterval(interval));
      return interval;
   }

   function createPausedInterval(): NodeJS.Timer {
      return setInterval(() => {
         dispatch(increasePausedTime());
      }, 1000);
   }

   function handleTimerStart( event: React.SyntheticEvent ) {
      event.preventDefault();
      setIsRunning(true);
      setUserInterval(createInterval());
      dispatch(setActivity());
   }

   function handleTimerStop( event: React.SyntheticEvent ) {
      event.preventDefault();
      setIsRunning(false);
      clearInterval(userInterval);
      dispatch(increaseHalts());
      dispatch(resetTimer());
   }

   function handleTimerPause( event: React.SyntheticEvent ) {
      event.preventDefault();
      setIsRunning(!isRunning);
      setPaused(!paused);
      if (!paused) {
         clearInterval(userInterval);
         setPausedInterval(createPausedInterval());
      } else {
         clearInterval(pausedInterval);
         setUserInterval(createInterval());
      }
   }

   function handleSkip( event: React.SyntheticEvent ) {
      event.preventDefault();
      setIsRunning(false);
      setPaused(false);
      dispatch(increaseTomatoes());
      dispatch(setFocus());
      dispatch(clearFocusTime());
      dispatch(resetTimer());
      dispatch(addTomato(currentTask));
      clearInterval(pausedInterval);
   }

   return (
      <>
         {tasks.length > 0
            ?
            <div className={styles.main}>
               <div className={styles.timer}>
                  <span>{`${Math.floor(seconds / 60)}:${seconds % 60 < 9 ? `${seconds % 60}0` : seconds % 60}`}</span>
                  <button className={styles.add} onClick={handleClick}>
                     <Icon name={EIcons.addIcon}/>
                  </button>
               </div>
               <p className={styles.taskDesc}>Задача 1 - <span>{currentTask.task}</span></p>
               <div className={styles.buttonWrapper}>
                  <InProgressButtonSet isRunning={isRunning} handleTimerPause={handleTimerPause}
                                       handleTimerStop={handleTimerStop}/>
                  <PausedButtonSet isPaused={paused} handleTimerContinue={handleTimerPause}
                                   handleTimerSkip={handleSkip}/>
                  <StartButtonSet isRunning={isRunning} isPaused={paused} handleTimerStart={handleTimerStart}
                                  handleTimerStop={handleTimerStop}/>
               </div>
            </div>
            :
            <div className={styles.main}>
               <h2 className={styles.emptyTitle}>Добавьте задание чтобы начать работать</h2>
            </div>
         }
      </>
   );
}
