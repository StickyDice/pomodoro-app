import React from "react";
import styles from "./content.module.sass";
import { InstructionList } from "./InstructionList";
import { NewTask } from "./NewTask";
import { TaskWindow } from "./TaskWindow";
import classNames from "classnames";
import { DeleteTask } from "../DeleteTask";
import { useAppSelector } from "../../store/hooks";
import { Login } from "../Login";
import { Stats } from "../Stats";

export function Content() {
   const classes = classNames("container", styles.container);
   const { username } = useAppSelector(state => state.login.user);
   return (
      <main>
         {username.length === 0
            ?
            <>
               {/*<div className={classes}>*/}
               {/*   <div className={styles.contentLeft}>*/}
               {/*      <InstructionList/>*/}
               {/*      <NewTask/>*/}
               {/*   </div>*/}
               {/*   <TaskWindow/>*/}
               {/*   <DeleteTask/>*/}
               {/*</div>*/}
               <Stats/>
            </>
            :
            <Login/>
         }
      </main>
   );
}
