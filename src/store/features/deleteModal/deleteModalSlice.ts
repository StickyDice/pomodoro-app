import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface IDeleteModal {
   isOpen: boolean;
   taskName: string;
}

const initialState = {
   taskInfo: {
      isOpen: false,
      taskName: "",
   } as IDeleteModal
};

export const deleteModalSlice = createSlice({
   name: "deleteModal",
   initialState,
   reducers: {
      changeTask: ( state, action: PayloadAction<string> ) => {
         return {
            taskInfo: {
               isOpen: state.taskInfo.isOpen,
               taskName: action.payload,
            }
         };
      },
      changeIsOpen: (state, action: PayloadAction<boolean>) => {
         return {
            taskInfo: {
               isOpen: action.payload,
               taskName: state.taskInfo.taskName,
            }
         };
      }
   }
});

export const { changeTask, changeIsOpen } = deleteModalSlice.actions;

export const select = ( state: RootState ) => state.deleteModal;

export const deleteModalReducer = deleteModalSlice.reducer;
