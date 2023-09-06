import React from 'react';
import styles from './header.sass';
import { EIcons, Icon } from "../Icon";

export function Header() {
   return (
      <div className='container'>
         <a className={styles.generalLink} href="#">
            <Icon name={EIcons.pomodoroIcon}/>
            pomodoro_box
         </a>
      </div>
   );
}
