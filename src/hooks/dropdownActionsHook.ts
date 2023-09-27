import { SyntheticEvent } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { removeTask } from "../store/features/tasksList/tasksListSlice";
import { changeIsOpen, changeTask } from "../store/features/deleteModal/deleteModalSlice";

export function useDropdownActions( task: string ) {
   const taskList = useAppSelector(state => state.tasksList);
   const { isOpen } = useAppSelector(state => state.deleteModal.taskInfo);
   const dispatch = useAppDispatch();

   function deleteHandler( event: SyntheticEvent ) {
      console.log("clicked");
      console.log(task);
      event.preventDefault();
      dispatch(removeTask(task));
      dispatch(changeIsOpen(false));
      dispatch(changeTask(""));
   }

   function increaseHandler( event: SyntheticEvent ) {
      event.preventDefault();

   }

   function decreaseHandler( event: SyntheticEvent ) {
      event.preventDefault();

   }

   function editHandler( event: SyntheticEvent ) {
      event.preventDefault();

   }

   return { deleteHandler };
}
