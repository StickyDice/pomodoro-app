import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface ITimer {
   seconds: number,
}

const initialState: ITimer = {
   seconds: 1500,
};

export const timerSlice = createSlice({
   name: 'timer',
   initialState,
   reducers: {
      timerTicking: state => {
         state.seconds--;
      },
      timerAddMinute: state => {
         state.seconds += 60;
      }
   }
});

export const {timerTicking, timerAddMinute} = timerSlice.actions;

export const selectTimer = (state: RootState) => state.timer;

export const timerReducer = timerSlice.reducer;
