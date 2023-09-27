import { configureStore } from "@reduxjs/toolkit";
import tasksListReducer  from "./features/tasksList/tasksListSlice";
import { timerReducer } from "./features/timer/timerSlice";
import { deleteModalReducer } from "./features/deleteModal/deleteModalSlice";
import { loginSliceReducer } from "./features/login/loginSlice";

export const store = configureStore({
   reducer: {
      tasksList: tasksListReducer,
      timer: timerReducer,
      deleteModal: deleteModalReducer,
      login: loginSliceReducer,
   }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
