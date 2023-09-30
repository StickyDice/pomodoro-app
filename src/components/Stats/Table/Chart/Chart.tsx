import React from "react";
import styles from "./chart.modules.sass";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { scaleLog } from "d3-scale";

const data = [
   {
      "day": "Пн",
      value: 1,
   },
   {
      "day": "Вт",
      value: 0,
   },
   {
      "day": "Ср",
      value: 0,
   },
   {
      "day": "Чт",
      value: 0,
   },
   {
      "day": "Пт",
      value: 0,
   },
   {
      "day": "Сб",
      value: 0,
   },
   {
      "day": "Вс",
      value: 0,
   },
];

export function Chart() {
   return (
      <ResponsiveContainer width="100%" height="100%">
         <BarChart data={data}>
            <CartesianGrid vertical={false}/>
            <XAxis
               dataKey="day" axisLine={false} tickLine={false}
            />
            <YAxis
               orientation="right"
               scale="time"
               // domain={[ 0, 2 ]}
               // tickCount={5}
               axisLine={false}
               tickLine={false}
            />
            <Bar dataKey="value" fill="#EA8A79"/>
         </BarChart>
      </ResponsiveContainer>
   );
}
