import React from "react";
import "./App.global.sass";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Timer } from "./components/Timer";
import { Stats } from "./components/Stats";
import { TimerRoute } from "./routes/TimerRoute";
import { StatsRoute } from "./routes/StatsRoute";

export function App() {
   return (
      <BrowserRouter>
         <Provider store={store}>
            <Routes>
               <Route path="/" element={<Navigate to="/login"/>}/>
               <Route path="/login" element={<Login/>}/>
               <Route path="/timers" element={<TimerRoute/>}/>
               <Route path="/stats" element={<StatsRoute/>}/>
            </Routes>
         </Provider>
      </BrowserRouter>
   );
}
