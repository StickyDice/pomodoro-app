import React, { ReactNode, SyntheticEvent } from "react";
import styles from "./myoption.module.sass";

interface IMyOptionProps {
   children: ReactNode;
   value: string;
   selected?: string;
   handleClick?: ( event: SyntheticEvent ) => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

export function MyOption( { children, value, selected , handleClick = noop }: IMyOptionProps ) {
   if (selected === value) {
      return null;
   }


   return (
      <>
         {selected && <div className={styles.br}></div>}
         <div className={styles.optionWrapper} data-value={value} onClick={handleClick}>
            {children}
         </div>
      </>
   );
}
