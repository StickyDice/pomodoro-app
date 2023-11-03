import React from "react";
import styles from "./startbuttonset.module.sass";
import { Button } from "../Button";

interface IStartButtonSet {
   isRunning: boolean;
   isPaused: boolean;
   handleTimerStart: (event: React.SyntheticEvent) => void;
   handleTimerStop: (event: React.SyntheticEvent) => void;
}

export function StartButtonSet({isPaused, isRunning, handleTimerStart, handleTimerStop}: IStartButtonSet) {
   if (isRunning || isPaused) return null;
   return (
      <>
         <Button className={styles.startButton} handleClick={handleTimerStart}>Старт</Button>
         <Button className={styles.stopButton} handleClick={handleTimerStop} disable={true}>Стоп</Button>
      </>
   );
}
