import React from "react";
import styles from "./chart.module.sass";
import { Bar } from "./Bar";
import { nanoid } from "nanoid";
import { XAxis } from "./XAxis";
import { YAxis } from "./YAxis";
import { faker } from "@faker-js/faker";

type weekdayType = {
   [key: string]: string
};

const weekday: weekdayType = {
   Monday: "Пн",
   Tuesday: "Вт",
   Wednesday: "Ср",
   Thursday: "Чт",
   Friday: "Пт",
   Saturday: "Сб",
   Sunday: "Вс"
};

const data = [
   {
      "day": "Пн",
      value: faker.number.int(150),
   },
   {
      "day": "Вт",
      value: faker.number.int(150),
   },
   {
      "day": "Ср",
      value: faker.number.int(150),
   },
   {
      "day": "Чт",
      value: faker.number.int(150),
   },
   {
      "day": "Пт",
      value: faker.number.int(150),
   },
   {
      "day": "Сб",
      value: faker.number.int(150),
   },
   {
      "day": "Вс",
      value: faker.number.int(150),
   },
];

export function Chart() {
   const today = new Date().toLocaleString("en-US", { weekday: "long" });
   return (
      <div className={styles.chartContainer}>
         <div className={styles.dataContainer}>
            {data.map(( item ) =>
               <Bar
                  descr={item.day}
                  value={item.value}
                  key={nanoid()}
                  today={item.day === weekday[today]}
               />)}
         </div>
         <XAxis/>
         <YAxis/>
      </div>
   );
}
