const STORED_WEEK_KEY = "STORED_WEEK_KEY";

export type WeekData = {
   eachDayTime: Array<number>;
   weekCount: number;
}

export type StoredWeeks = Array<WeekData>

function getWeekNumber(): number {
   const currentDate: Date = new Date();
   const startDate: Date = new Date(currentDate.getFullYear(), 0, 1);
   const days = Math.floor((currentDate.getTime() - startDate.getTime()) /
      (24 * 60 * 60 * 1000));

   return Math.ceil(days / 7);
}

function weekIsExpired(week: WeekData): boolean {
   return getWeekNumber() - week.weekCount > 2;
}

function setWeekData(weeks: StoredWeeks): void {
   localStorage.setItem(
      STORED_WEEK_KEY,
      JSON.stringify(weeks)
   );
}

export function getWeekData(): StoredWeeks {
   const weeksData = localStorage.getItem(STORED_WEEK_KEY);
   if (weeksData) {
      const data: StoredWeeks = JSON.parse(weeksData);
      if (weekIsExpired(data[0])) {
         deleteOldWeek();
         data.unshift({
            eachDayTime: [0, 0, 0, 0, 0, 0, 0],
            weekCount: getWeekNumber()
         });
         setWeekData(data);
      }
      return data;
   } else {
      // Data if user is new
      return [
         {
            eachDayTime: [ 0, 0, 0, 0, 0, 0, 0 ],
            weekCount: getWeekNumber()
         },
         {
            eachDayTime: [ 0, 0, 0, 0, 0, 0, 0 ],
            weekCount: getWeekNumber()
         },
         {
            eachDayTime: [ 0, 0, 0, 0, 0, 0, 0 ],
            weekCount: getWeekNumber()
         }
      ];
   }
}

export function deleteOldWeek(): void {
   let weekData: StoredWeeks | null = getWeekData();
   if (weekData) {
      weekData = weekData.splice(0, 1);
      setWeekData(weekData);
   }
}
