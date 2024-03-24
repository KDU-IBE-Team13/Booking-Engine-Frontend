import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Button, IconButton } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { BookingDatesCalendarStyled, DoubleCalendarStyled } from "./CalendarStyled";
import { setWeekDays, dateDiffInDays } from "../../utils/utils"; 
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

interface CalendarProps {
  tileContent: (args: { date: Date }) => JSX.Element | null;
}


const BookingDatesCalendar: React.FC<CalendarProps> = ({ tileContent }) => {

  const lengthOfStay = useSelector(
    (state: RootState) => state.landingPageConfig.searchForm.lengthOfStay
  );

  const { t } = useTranslation();
  
  const present_date = new Date();
  const [bookingStartDate, setBookingStartDate] = useState<Date | null>(null);
  const [bookingEndDate, setBookingEndDate] = useState<Date | null>(null);

  const [isCalendar, setIsCalendar] = useState(false);
  const [showDoubleView, setShowDoubleView] = useState(true);
  const [error, setError] = useState("");

  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);

  const handleDateTileClick = (date: Date) => {
    if (bookingStartDate === null) {
      setBookingStartDate(date);
    } else if (bookingEndDate === null) {
      setBookingEndDate(date);
      const diffInDays = dateDiffInDays(bookingStartDate, date);
      if (diffInDays > lengthOfStay) {
        setError(t('landingPage.calendarDateRangeError') + lengthOfStay + " " + t('landingPage.calendarDays'));
        setBookingEndDate(null);
        setBookingStartDate(null)
      } else {
        setError("");
      }
    } else {
      setBookingStartDate(date);
      setBookingEndDate(null);
    }
  };

  const showCalendar = () => {
    setIsCalendar((prev) => !prev);
  };
  
  const setBookingDates = () => {
    if (bookingStartDate && bookingEndDate) {
        setCheckInDate(bookingStartDate);
        setCheckOutDate(bookingEndDate);
        setIsCalendar(false);

        const nextBookingStartDate = new Date(bookingStartDate);
        nextBookingStartDate.setDate(nextBookingStartDate.getDate() + 1);

        const nextBookingEndDate = new Date(bookingEndDate);
        nextBookingEndDate.setDate(nextBookingEndDate.getDate() + 1);

        localStorage.setItem('checkInDate', nextBookingStartDate.toISOString().split('T')[0]);
        localStorage.setItem('checkOutDate', nextBookingEndDate.toISOString().split('T')[0]);
    }
};

useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 1000) {
      setShowDoubleView(false);
    } else {
      setShowDoubleView(true);
    }
  };

  window.addEventListener("resize", handleResize);
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);


  return (
    <BookingDatesCalendarStyled>
      <label className="selectDates">
       {t('landingPage.calendarLabel')}
      </label>
      <IconButton onClick={showCalendar} className="calendar-container">
        <div>{checkInDate ? checkInDate.toLocaleDateString() : t('landingPage.checkIn')}</div>
        <div> &#8594;</div>
        <div>{checkOutDate ? checkOutDate.toLocaleDateString() : t('landingPage.checkOut')}</div>
        <CalendarMonthIcon />
      </IconButton>
      {isCalendar && (
        <DoubleCalendarStyled>
          <Calendar
            className="double-calendar"
            onClickDay={handleDateTileClick}
            value={[bookingStartDate, bookingEndDate]}
            showDoubleView={showDoubleView}
            selectRange
            minDate={present_date}
            formatShortWeekday={setWeekDays}
            tileContent={tileContent}
            showNeighboringMonth={false}
            showFixedNumberOfWeeks={false}
          />
          <div className="SubmitBtnContainer">
            <Button className="submitBtn" disabled ={!bookingStartDate || !bookingEndDate} onClick={setBookingDates}>{t('landingPage.calendarButton')}</Button>
            <div className="errorMsg">{error}</div>
          </div>
        </DoubleCalendarStyled>
      )}
    </BookingDatesCalendarStyled>
  );
};

export default BookingDatesCalendar;



