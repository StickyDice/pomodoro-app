import { getTodayData } from "../utilities/ts/storeTodayData";

export function useTodayData(): Array<number> {
   const todayData = getTodayData();
   let workTime = 0;
   let tomatoes = 0;
   let pausedTime = 0;
   let focus = 0;
   let halts = 0;
   if (todayData) {
      workTime = todayData.workTime;
      tomatoes = todayData.tomatoes;
      pausedTime = todayData.pausedTime;
      focus = todayData.focus;
      halts = todayData.tomatoes;
   }

   return [workTime, tomatoes, pausedTime, focus, halts];
}
