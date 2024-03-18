import moment from 'moment';
import { WEEK_DAYS } from '../constants/constants';

export const setWeekDays = (
    locale: string | undefined,
    date: Date
  ): string => {
    return WEEK_DAYS[date.getDay()];
};


export const calculateMaxDate = (
  startDate: Date | null,
  endDate: Date | null,
  days: number
): Date | undefined => {
  if (startDate && !endDate) {
    return moment(startDate).add(days, "days").toDate();
  }
  return undefined;
};


export const dateDiffInDays = (date1: Date, date2: Date): number => {
    const diffInTime = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(diffInTime / (1000 * 60 * 60 * 24));
};