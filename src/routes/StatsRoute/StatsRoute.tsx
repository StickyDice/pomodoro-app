import React from "react";
import { Header } from "../../components/Header";
import { Stats } from "../../components/Stats";

export function StatsRoute() {
   return (
      <>
         <Header/>
         <main>
            <Stats/>
         </main>
      </>
   );
}
