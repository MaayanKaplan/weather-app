import { format, addDays } from "date-fns";

export const ConvertTime = (date: Date) => {
  const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  return `${hour}:${minutes}`;
};

export const ConvertDate = (date: Date) =>
  `${date.getDate()}.${date.getMonth() + 1}`;

const today = new Date();
const tomorrow = addDays(today, 1);
const afterTomorrow = addDays(today, 2);
const in3Days = addDays(today, 3);
const in4Days = addDays(today, 4);

export const nextDaysOfWeek = [
  format(today, "EEE"),
  format(tomorrow, "EEE"),
  format(afterTomorrow, "EEE"),
  format(in3Days, "EEE"),
  format(in4Days, "EEE"),
];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const convertFahrToCel = (fahrenheit: number) => (5 / 9) * (fahrenheit - 32);

export default convertFahrToCel;

export const DayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
// export const ConvertDate = () => {
//   const currentDate = new Date();
//   const day = currentDate.getDate();
//   const dayWeek = currentDate.getDay();
//   const x = currentDate.toDateString().substr(4, 3);
//   const year = currentDate.getFullYear();
//   const hours = currentDate.getHours();
//   let minutes: string | number = currentDate.getMinutes();
//   const ampm = hours >= 12 ? "pm" : "am";
//   minutes = minutes < 10 ? `0${minutes}` : minutes;
//   const strTime = `${hours}:${minutes}${ampm}`;
//   return `${DayNames[dayWeek]}, ${day}-${x}-${year}, ${strTime}`;
// };

export const ConvertDayOfWeek = (date: Date) =>
  DayNames[date.getDay()].slice(0, 3);
