import React from 'react';
import styles from './header.module.sass';
import { EIcons, Icon } from "../Icon";
import classNames from "classnames";

export function Header() {
   const classes = classNames(styles.headerContainer, 'container');
   return (
      <header className={styles.header}>
         <div className={classes}>
            <a className={styles.generalLink} href="#">
               <Icon name={EIcons.pomodoroIcon}/>
               <span>pomodoro_box</span>
            </a>
            <a className={styles.statsLink} href="#">
               <Icon name={EIcons.equalizerIcon}/>
               Статистика
            </a>
         </div>
      </header>
   );
}
