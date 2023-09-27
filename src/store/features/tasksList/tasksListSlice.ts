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
         const list = state.tasksList.map((item) => {
            return {
               ...item,
            } as ITask;
         });
         const taskIndex = findTaskIdByTaskname(action.payload, list);
         if (typeof taskIndex !== 'undefined') {
            state.tasksList.splice(taskIndex, 1);
         }
      }
   }

});

export const { addTask, removeTask } = tasksListSlice.actions;

export const selectTasks = ( state: RootState ) => state.tasksList;

export default tasksListSlice.reducer;
