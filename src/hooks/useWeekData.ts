import { getWeekData, StoredWeeks } from "../utilities/ts/storeWeeksData";

export function useWeekData() {
   const weeksData: StoredWeeks = getWeekData();
}
