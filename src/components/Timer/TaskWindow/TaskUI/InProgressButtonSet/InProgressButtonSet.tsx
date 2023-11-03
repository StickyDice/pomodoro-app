import React from "react";
import styles from "./inprogressbuttonset.module.sass";
import { Button } from "../Button";

interface IInProgressButtonSetProps {
   isRunning: boolean;
   handleTimerPause: (event: React.SyntheticEvent) => void;
   handleTimerStop: (event: React.SyntheticEvent) => void;
}

export function InProgressButtonSet({isRunning, handleTimerPause, handleTimerStop}: IInProgressButtonSetProps) {
   if (!isRunning) return null;
   return (
      <>
         <Button className={styles.pauseButton} handleClick={handleTimerPause}>Пауза</Button>
         <Button className={styles.stopButton} handleClick={handleTimerStop} disable={false}>Стоп</Button>
      </>
   );
}
