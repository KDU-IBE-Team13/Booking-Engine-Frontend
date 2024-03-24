import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Box, Button, IconButton, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { BookingDatesCalendarStyled, DoubleCalendarStyled, VerticalLine } from "./RoomCalendarStyled";
import { setWeekDays, dateDiffInDays } from "../../../utils/utils"; 
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

interface CalendarProps {
  tileContent: (args: { date: Date }) => JSX.Element | null;
  propertyRates: { [key: string]: number };
  checkInDate: Date | null;
  setCheckInDate: React.Dispatch<React.SetStateAction<Date | null>>;
  checkOutDate: Date | null;
  setCheckOutDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

interface IRoomDate {
  date: Date | null
}


const RoomCalendar: React.FC<CalendarProps> = ({
  tileContent
}) => {
  
  const location = useLocation();

  const startDateLocalStr = localStorage.getItem('checkInDate');
  const startDateLocal = startDateLocalStr ? new Date(startDateLocalStr) : null;
  const endDateLocalStr = localStorage.getItem('checkOutDate');
  const endDateLocal = endDateLocalStr ? new Date(endDateLocalStr) : null;

  const lengthOfStay = useSelector(
    (state: RootState) => state.landingPageConfig.searchForm.lengthOfStay
  );

  const { t } = useTranslation();
  
  const present_date = new Date();
  const [bookingStartDate, setBookingStartDate] = useState<Date | null>(startDateLocal);
  const [bookingEndDate, setBookingEndDate] = useState<Date | null>(endDateLocal);

  const [isCalendar, setIsCalendar] = useState(false);
  const [showDoubleView, setShowDoubleView] = useState(true);
  const [error, setError] = useState("");

  const [checkInDate, setCheckInDate] = useState<Date | null>(startDateLocal);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(endDateLocal);


  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const checkInDateParam = searchParams.get('checkInDate');
    const checkOutDateParam = searchParams.get('checkOutDate');

    if (checkInDateParam && checkOutDateParam) {
      const checkInDate = new Date(checkInDateParam);
      const checkOutDate = new Date(checkOutDateParam);
      
      setBookingStartDate(checkInDate);
      setBookingEndDate(checkOutDate);
    }
    else
    {
      setBookingStartDate(null);
      setBookingEndDate(null);
    }
  }, [location.search]);

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


const CalendarStartMenuInput = ({date}: IRoomDate) => {
  return (
    <Box>
      <Typography fontSize={{ md: "0.8rem", xs: "0.75rem", lg: "0.875rem" }} color={"#858685"} padding={{md: "0 4rem 0 0", xs: "0rem"}}>
        {"Check in between"}
      </Typography>
      <Typography fontSize={{ md: "0.8rem", xs: "0.75rem", lg: "0.875rem" }} fontWeight={700} padding={{md: "0 4rem 0 0", xs: "0rem"}}>{date? date.toDateString(): `Any Date`}</Typography>
    </Box>
  );
};


const CalendarEndMenuInput = ({date}: IRoomDate) => {
  return (
    <Box>
      <Typography fontSize={{ md: "0.8rem", xs: "0.75rem", lg: "0.875rem" }} color={"#858685"} padding={{md: "0 4rem 0 2rem", xs: "0rem"}}>
        {"Check out between"}
      </Typography>
      <Typography fontSize={{ md: "0.8rem", xs: "0.75rem", lg: "0.875rem" }} fontWeight={700} padding={{md: "0 4rem 0 2rem", xs: "0rem"}}>{date? date.toDateString(): `Any Date`}</Typography>
    </Box>
  );
};

  return (
    <BookingDatesCalendarStyled>
      <IconButton onClick={showCalendar} className="calendar-container">
        <div>{checkInDate ? <CalendarStartMenuInput date={checkInDate}/>: <CalendarStartMenuInput date={bookingStartDate} />}</div>
        <VerticalLine></VerticalLine>
        <div>{checkOutDate ? <CalendarEndMenuInput date={checkOutDate}/> : <CalendarEndMenuInput date={bookingEndDate}/>}</div>
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

export default RoomCalendar;



