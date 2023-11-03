const TODAY_DATA_KEY = "TODAY_DATA_KEY";

export type TodayData = {
   workTime: number;
   tomatoes: number;
   focus: number;
   pausedTime: number;
   haltCount: number;
   day: number;
}

export function setTodayData( data: TodayData ) {
   localStorage.setItem(
      TODAY_DATA_KEY,
      JSON.stringify(data)
   );
}

function dataExpired( data: TodayData ): boolean {
   return new Date().getDay() !== data.day;
}

function deleteTodayData(): void {
   localStorage.removeItem(TODAY_DATA_KEY);
}

export function getTodayData(): TodayData | null {
   const todayData = localStorage.getItem(TODAY_DATA_KEY);
   if (todayData) {
      const parsedData: TodayData = JSON.parse(todayData);
      if (dataExpired(parsedData)) {
         deleteTodayData();
      } else {
         return parsedData;
      }
   }
   return null;
}
