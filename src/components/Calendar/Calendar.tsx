import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Button, IconButton } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import {
  BookingDatesCalendarStyled,
  DoubleCalendarStyled,
} from "./CalendarStyled";
import { setWeekDays, dateDiffInDays } from "../../utils/utils";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

interface CalendarProps {
  tileContent: (args: { date: Date }) => JSX.Element | null;
  propertyRates: { [key: string]: number };
  checkInDate: Date | null;
  setCheckInDate: React.Dispatch<React.SetStateAction<Date | null>>;
  checkOutDate: Date | null;
  setCheckOutDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

const BookingDatesCalendar: React.FC<CalendarProps> = ({
  tileContent,
  propertyRates,
  checkInDate,
  setCheckInDate,
  checkOutDate,
  setCheckOutDate,
}) => {
  const lengthOfStay = useSelector(
    (state: RootState) => state.landingPageConfig.searchForm.lengthOfStay
  );

  const { t } = useTranslation();

  const selectedCurrencySymbol = useSelector(
    (state: RootState) => state.currency.selectedCurrencySymbol
  );

  const present_date = new Date();
  const [bookingStartDate, setBookingStartDate] = useState<Date | null>(null);
  const [bookingEndDate, setBookingEndDate] = useState<Date | null>(null);

  const [isCalendar, setIsCalendar] = useState(false);
  const [showDoubleView, setShowDoubleView] = useState(true);
  const [error, setError] = useState("");

  const [minimumPriceMessage, setMinimumPriceMessage] = useState("");

  useEffect(() => {
    if (bookingStartDate && bookingEndDate) {
      const calculateAveragePrice = () => {
        let totalAmount = 0;
        let daysStayIn = 0;

        for (
          let date = new Date(bookingStartDate);
          date <= bookingEndDate;
          date.setDate(date.getDate() + 1)
        ) {
          const isoDate = date.toISOString().split("T")[0] + "T00:00:00.000Z";
          totalAmount += propertyRates[isoDate] ?? 0;
          daysStayIn++;
        }

        const averageAmount = totalAmount / daysStayIn;

        console.log(minimumPriceMessage);
        setMinimumPriceMessage(
          t("landingPage.priceLabel") +
            `${selectedCurrencySymbol}` +
            `${averageAmount.toFixed(2)}`
        );
      };
      calculateAveragePrice();
    }
  }, [bookingStartDate, bookingEndDate, propertyRates]);

  const handleDateTileClick = (date: Date) => {
    if (bookingStartDate === null) {
      setBookingStartDate(date);
    } else if (bookingEndDate === null) {
      if (date < bookingStartDate) {
        setBookingEndDate(bookingStartDate);
        setBookingStartDate(date);
      } else {
        setBookingEndDate(date);
      }
      const diffInDays = dateDiffInDays(bookingStartDate, date);
      if (diffInDays > lengthOfStay) {
        setMinimumPriceMessage("");
        setError(
          t("landingPage.calendarDateRangeError") +
            lengthOfStay +
            " " +
            t("landingPage.calendarDays")
        );
        setBookingEndDate(null);
        setBookingStartDate(null);
      } else {
        setError("");
      }
    } else {
      setBookingStartDate(date);
      setBookingEndDate(null);
    }
  };

  const showCalendar = () => {
    setError("");
    setIsCalendar((prev) => !prev);
  };

  const setBookingDates = () => {
    if (bookingStartDate && bookingEndDate) {
      setCheckInDate(bookingStartDate);
      setCheckOutDate(bookingEndDate);
      setIsCalendar(false);
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
    <BookingDatesCalendarStyled data-testid="booking-dates-calendar">
      <label className="selectDates" data-testid="calendar-label">
        {t("landingPage.calendarLabel")}
      </label>
      <IconButton
        onClick={showCalendar}
        className="calendar-container"
        data-testid="calendar-icon-button"
      >
        <div data-testid="check-in-date">
          {checkInDate
            ? checkInDate.toLocaleDateString()
            : t("landingPage.checkIn")}
        </div>
        <div> &#8594;</div>
        <div data-testid="check-out-date">
          {checkOutDate
            ? checkOutDate.toLocaleDateString()
            : t("landingPage.checkOut")}
        </div>
        <CalendarMonthIcon />
      </IconButton>
      {isCalendar && (
        <DoubleCalendarStyled data-testid="double-calendar-container">
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
            data-testid="calendar"
          />
          <div
            className="SubmitBtnContainer"
            data-testid="submit-button-container"
          >
            <Button
              className="submitBtn"
              disabled={!bookingStartDate || !bookingEndDate}
              onClick={setBookingDates}
              data-testid="submit-button"
            >
              {t("landingPage.calendarButton")}
            </Button>
            <div className="errorMsg" data-testid="error-message">
              {error}
            </div>

            <div className="showPrice">{minimumPriceMessage}</div>
          </div>
        </DoubleCalendarStyled>
      )}
    </BookingDatesCalendarStyled>
  );
};

export default BookingDatesCalendar;
