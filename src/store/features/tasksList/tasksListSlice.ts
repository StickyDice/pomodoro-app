import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { findTaskIdByTaskname } from "../../../utilities/ts/findTaskByTaskname";

export interface ITask {
   task: string;
   tomatoes: number;
}

export interface ITasks {
   tasksList: Array<ITask>;

   [key: number]: ITask;
}

const initialState: ITasks = {
   tasksList: []
};

export const tasksListSlice = createSlice({
   name: "tasksList",
   initialState,
   reducers: {
      addTask: ( state, action: PayloadAction<string> ) => {
         state.tasksList = [
            ...state.tasksList,
            {
               task: action.payload,
               tomatoes: 1
            }
         ];
      },
      removeTask: ( state, action: PayloadAction<string> ) => {
         const list = state.tasksList.filter(( item ) => {
            if (item.task === action.payload) {
               return item;
            }
         });
         const taskIndex = findTaskIdByTaskname(action.payload, list);
         if (typeof taskIndex !== "undefined") {
            state.tasksList.splice(taskIndex, 1);
         }
      },
      addTomato: ( state, action: PayloadAction<ITask> ) => {
         state.tasksList.forEach(( item ) => {
            if (item.task === action.payload.task) {
               item.tomatoes++;
            }
         });
      }
   }

});

export const { addTask, removeTask, addTomato } = tasksListSlice.actions;

export const selectTasks = ( state: RootState ) => state.tasksList;

export default tasksListSlice.reducer;
