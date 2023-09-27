import React from "react";
import styles from "./select.module.sass";

export function Select() {
   return (
      <select name="" id="">
         <option value="">Эта неделя</option>
         <option value="">Прошедшая неделя</option>
         <option value="">2 недели назад</option>
      </select>
   );
}
