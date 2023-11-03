import React from "react";
import { Header } from "../../components/Header";
import { Timer } from "../../components/Timer";

export function TimerRoute() {
   return (
      <>
         <Header/>
         <main>
            <Timer/>
         </main>
      </>
   );
}
