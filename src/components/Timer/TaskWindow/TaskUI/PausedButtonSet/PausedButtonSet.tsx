import React from "react";
import styles from "./pausedbuttonset.module.sass";
import { Button } from "../Button";

interface IPausedButtonSetProps {
   isPaused: boolean;
   handleTimerContinue: (event: React.SyntheticEvent) => void;
   handleTimerSkip: (event: React.SyntheticEvent) => void;
}

export function PausedButtonSet({isPaused, handleTimerSkip, handleTimerContinue}: IPausedButtonSetProps) {
   if (!isPaused) return null;
   return (
      <>
         <Button className={styles.pauseButton} handleClick={handleTimerContinue}>Продолжить</Button>
         <Button className={styles.stopButton} handleClick={handleTimerSkip} disable={false}>Пропустить</Button>
      </>
   );
}
