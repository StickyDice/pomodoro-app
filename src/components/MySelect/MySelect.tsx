import React, { Dispatch, ReactNode, SetStateAction, SyntheticEvent, useEffect, useRef, useState } from "react";
import { EIcons, Icon } from "../Icon";
import { MyOption } from "./MyOption";
import styles from "./myselect.module.sass";

interface IMySelectProps {
   selected: string;
   children: ReactNode;
}

export enum selectOptions {
   current = "Эта неделя",
   previous = "Прошедшая неделя",
   beforePrevious = "2 недели назад",
}

export function MySelect( { children, selected }: IMySelectProps ) {
   const [ isOpen, setIsOpen ] = useState(false);
   const ref = useRef<HTMLButtonElement>(null);

   useEffect(() => {
      const handleOutsideClick = ( event: MouseEvent ) => {
         if (event.target instanceof Node && !ref.current?.contains(event.target)) {
            setIsOpen(false);
         }
      };
      window.addEventListener("click", handleOutsideClick);

      return () => {
         window.removeEventListener("click", handleOutsideClick);
      };
   }, []);



   return (
      <button className={styles.button} ref={ref} data-is-active={isOpen} onClick={() => setIsOpen(!isOpen)}>
         <MyOption value={selected}>
            {Object(selectOptions)[selected]}
            <div style={{
               transform: `rotate(${isOpen ? 180 : 0}deg) translateY(${isOpen ? -2 : 0}px)`,
            }}>
               <Icon name={EIcons.arrowIcon} size={[ 16, 10 ]}/>
            </div>
         </MyOption>

         <div className={styles.selectDrop}>
            {
               isOpen && children
            }
         </div>
      </button>
   );
}
