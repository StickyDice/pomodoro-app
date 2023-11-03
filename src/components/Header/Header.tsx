import React from 'react';
import styles from './header.module.sass';
import { EIcons, Icon } from "../Icon";
import classNames from "classnames";
import { Link } from "react-router-dom";

export function Header() {
   const classes = classNames(styles.headerContainer, 'container');
   return (
      <header className={styles.header}>
         <div className={classes}>
            <Link to="../timers" className={styles.generalLink}>
               <Icon name={EIcons.pomodoroIcon}/>
               <span>pomodoro_box</span>
            </Link>
            <Link to="../stats" className={styles.statsLink}>
               <Icon name={EIcons.equalizerIcon}/>
               Статистика
            </Link>
         </div>
      </header>
   );
}
