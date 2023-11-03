import React, { useRef, useState } from "react";
import styles from "./dropdown.module.sass";
import { createPortal } from "react-dom";
import { DropdownItemsList } from "./DropdownItemsList";
import { DeleteTask } from "../../../../DeleteTask";

interface IDropdownProps {
   isOpen: boolean;
   button: React.ReactNode;
   task: string;
}

export function Dropdown( { isOpen, button, task }: IDropdownProps ) {
   const [isModalOpen, setIsModalOpen] = useState(false);
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
               top: `${( ref.current?.getBoundingClientRect().top || 0 ) + window.scrollY + 19}px`,
               left: `${( ref.current?.getBoundingClientRect().left || 0 ) + window.scrollX + 121}px`
            }}>
            <DropdownItemsList setIsModalOpen={setIsModalOpen}/>
         </div>, dropdownRoot)}
         <DeleteTask taskName={task} isOpen={isModalOpen} changeOpen={setIsModalOpen}/>;
      </>
   );
}
