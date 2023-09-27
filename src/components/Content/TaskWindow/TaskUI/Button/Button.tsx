import React from 'react';
import styles from './button.module.sass';

interface IButtonProps {
   handleClick: (event: React.SyntheticEvent) => void;
   children: React.ReactNode;
   className: string;
   disable?: boolean;
}

export function Button( { handleClick, children, className, disable = false }: IButtonProps) {
   return (
      <button className={className} onClick={handleClick} disabled={disable}>{children}</button>
   );
}
