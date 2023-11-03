import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface ITimer {
   seconds: number,
   isActive: boolean,
   interval: NodeJS.Timer | null,
   timePassed: number,
}

const initialState: ITimer = {
   seconds: 1500,
   isActive: false,
   interval: null,
   timePassed: 0,
};

export const timerSlice = createSlice({
   name: "timer",
   initialState,
   reducers: {
      timerTicking: state => {
         state.seconds--;
         state.timePassed++;
      },
      timerAddMinute: state => {
         state.seconds += 60;
      },
      resetTimer: state => {
         state.seconds = 1500;
      },
      setActivity: state => {
         state.isActive = !state.isActive;
      },
      initiateInterval: (state, payload: PayloadAction<NodeJS.Timer>) => {
         state.interval = payload.payload;
      }
   }
});

export const { timerTicking, timerAddMinute, resetTimer, setActivity, initiateInterval } = timerSlice.actions;

export const selectTimer = ( state: RootState ) => state.timer;

export const timerReducer = timerSlice.reducer;
