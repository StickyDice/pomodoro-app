import React from "react";
import "./App.global.sass";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { store } from "./store/store";
import { Provider } from "react-redux";

export function App() {
   return (
      <div>
         <Provider store={store}>
            <Header/>
            <Content/>
         </Provider>
      </div>
   );
}
