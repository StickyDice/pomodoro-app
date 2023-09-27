import React, { useRef } from "react";
import styles from "./dropdown.module.sass";
import { createPortal } from "react-dom";
import { DropdownItemsList } from "./DropdownItemsList";

interface IDropdownProps {
   isOpen: boolean;
   button: React.ReactNode;
   task: string;
}

export function Dropdown( { isOpen, button, task }: IDropdownProps ) {
   const ref = useRef<HTMLDivElement>(null);
   const dropdownRoot = document.getElementById("dropdown__root");
   if (!dropdownRoot) {
      return null;
   }
   return (
      <>
         <div ref={ref}>
            {button}
         </div>
         {isOpen && createPortal(<div
            className={styles.dropdownWrapper}
            style={{
            top: `${(ref.current?.getBoundingClientRect().top || 0) + window.scrollY + 19}px`,
            left: `${(ref.current?.getBoundingClientRect().left || 0) + window.scrollX + 121}px`
         }}>
            <DropdownItemsList task={task}/>
         </div>, dropdownRoot)}
      </>
   );
}
