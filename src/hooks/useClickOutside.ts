import { Dispatch, SetStateAction, SyntheticEvent, useEffect, useRef } from "react";

interface IUseClickOutsideProps {
   onClose: () => void;
}

export function useClickOutside( { onClose }: IUseClickOutsideProps ) {
   const ref = useRef<HTMLDivElement>(null);

   useEffect(() => {
      function handleClick( event: MouseEvent ){
         if (event.target instanceof Node && !ref.current?.contains(event.target)) {
            onClose();
         }
      }

      document.addEventListener("click", handleClick);

      return () => {
         document.removeEventListener("click", handleClick);
      };
   }, []);
   return ref;
}
