import { ITask } from "../../store/features/tasksList/tasksListSlice";

export function findTaskIdByTaskname( taskName: string, taskList: ITask[] ) {
   for (const taskIndex in taskList) {
      if (taskList[Number(taskIndex) as number].task === taskName) {
         return Number(taskIndex) as number;
      }
   }
}
