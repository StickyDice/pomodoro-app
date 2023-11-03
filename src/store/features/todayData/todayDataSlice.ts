import { createSlice } from "@reduxjs/toolkit";
import { Simulate } from "react-dom/test-utils";
import pause = Simulate.pause;
import { RootState } from "../../store";

interface ITodayDataSclice {
   workTime: number;
   tomatoes: number;
   pausedTime: number;
   focusTime: number;
   focus: number;
   halts: number;
}

const initialState: ITodayDataSclice = {
   workTime: 51,
   tomatoes: 1,
   focusTime: 0,
   pausedTime: 9,
   focus: 0,
   halts: 3,
};

export const todayDataSlice = createSlice({
   name: "todayData",
   initialState,
   reducers: {
      increaseWorkTime: state => {
         state.workTime++;
      },
      increaseTomatoes: state => {
         state.tomatoes++;
      },
      increasePausedTime: state => {
         state.pausedTime++;
      },
      increaseFocusTime: state => {
         state.focusTime++;
      },
      increaseHalts: state => {
         state.halts++;
      },
      setFocus: state => {
         state.focus += state.focusTime;
      },
      clearFocusTime: state => {
         state.focusTime = 0;
      }
   }
});


export const {
   increaseFocusTime,
   increasePausedTime,
   increaseWorkTime,
   increaseTomatoes,
   increaseHalts,
   setFocus,
   clearFocusTime,
} = todayDataSlice.actions;
export const selectTodayData = ( state: RootState ) => state;

export const todayDataReducer = todayDataSlice.reducer;
