import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type IWeekData = {
   [key in 1 | 2 | 3 | 4 | 5 | 6 | 7]: number;
};

interface IThreeWeekData {
   beforePrevious: IWeekData;
   previous: IWeekData;
   current: IWeekData;
}

const initialState: IThreeWeekData = {
   beforePrevious: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
   },
   previous: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
   },
   current: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
   }
};

export const weekDataSlice = createSlice({
   name: "weekData",
   initialState,
   reducers: {
      removeFirstWeek: state => {
         state.beforePrevious = state.previous;
         state.previous = state.current;
         state.current = {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
         };
      },
      addTime: (state, action: PayloadAction<1 | 2 | 3 | 4 | 5 | 6 | 7>) => {
         state.current[action.payload]++;
      }
   }
});

export const {removeFirstWeek, addTime} = weekDataSlice.actions;

export const selectWeekData = (state: RootState) => state;

export const weekDataReducer = weekDataSlice.reducer;

