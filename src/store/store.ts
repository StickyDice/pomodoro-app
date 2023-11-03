import { configureStore } from "@reduxjs/toolkit";
import tasksListReducer  from "./features/tasksList/tasksListSlice";
import { timerReducer } from "./features/timer/timerSlice";
import { loginSliceReducer } from "./features/login/loginSlice";
import { todayDataReducer } from "./features/todayData/todayDataSlice";
import { weekDataReducer } from "./features/weekData/weekDataSlice";

export const store = configureStore({
   reducer: {
      tasksList: tasksListReducer,
      timer: timerReducer,
      login: loginSliceReducer,
      todayData: todayDataReducer,
      weekData: weekDataReducer,
   }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
