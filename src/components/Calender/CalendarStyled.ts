import styled from "styled-components";
export const BookingDatesCalendarStyled = styled.div`
  position: relative;
  margin-top: 1rem;
  .selectDates {
    font-size: 0.875rem;
  }

  .calendar-container {
    height: 3.134rem;
    width: 292px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    color: black;
    border: 1px solid #c1c2c2;
    border-radius: 0.25rem;
  }
`;

export const DoubleCalendarStyled = styled.div`
  border-radius: 0.3125rem;
  position: absolute;
  z-index: 999;
  background-color: white;
  border: 1px solid #858685;

  .double-calendar {
    border-width: 0 0 1px;
  }

  .SubmitBtnContainer {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: flex-end;
    margin: 1.5rem 2rem;

    .submitBtn {
      width: 8rem;
      height: 2.5rem;
      border-radius: 0.25rem;
      border: none;
      background-color: #26266d;
      color: white;

      &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
    }

    .errorMsg {
      margin-top: 0.3rem;
      color: #d7394a;
      width: 23%;
      font-size: 0.9rem;
    }
  }

  .react-calendar__tile--now {
    background-color: white;
  }

  .react-calendar__month-view__days__day--weekend {
    color: black;
  }

  .react-calendar__tile--hasActive:enabled:hover {
    background: #26266d;
  }

  .react-calendar__tile--hasActive:enabled:focus {
    background: #26266d;
  }

  .react-calendar__month-view__days__day--weekend:disabled {
    color: #ababab;
  }

  .react-calendar__tile {
    padding: 3px;
    height: 3.4rem;
    border: white solid;
    border-width: 0.33rem 0.33rem;
    font-size: 1rem;
    font-weight: 700;
  }

  .react-calendar {
    width: 56rem;
    padding: 0 2rem;
    border-radius: 0.3125rem 0.3125rem 0 0;
  }

    .react-calendar__month-view__weekdays__weekday {
    font-size: 1rem;
    color: #858685;
    font-weight: 400;

    abbr {
      text-decoration: none;
    }
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: #858685;
  }

  .react-calendar__tile--active:enabled:hover {
    background-color: #26266d;
    color: white;
  }

  .react-calendar__tile--hover:disabled {
    background-color: #f0f0f0;
    color: #ababab;
  }

  .react-calendar__tile--active:enabled:focus {
    background-color: #26266d;
    color: white;
  }

  .react-calendar__tile--active {
    color: black;
    background-color: #c1c2c2;
  }

  .react-calendar__tile--rangeEnd {
    background-color: #26266d;
    color: white;
  }

  .react-calendar__tile--rangeStart {
    background-color: #26266d;
    color: white;
  }

  .react-calendar__navigation__label {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1rem;
  }

  .react-calendar__navigation__arrow {
    font-size: 2rem;
  }

  .react-calendar__navigation__prev2-button,
  .react-calendar__navigation__next2-button {
    display: none;
  }

  react-calendar__month-view__days__day--neighboringMonth {
    font-weight: 400;
  }

  .react-calendar__navigation__label__divider {
    display: none;
  }


  @media screen and (max-width: 990px) {
    .react-calendar {
      width: 32rem;
      padding: 0 2rem;
      border-radius: 0.3125rem 0.3125rem 0 0;
    }
  }

  @media screen and (max-width: 590px) {
    .react-calendar {
      width: 100%;
      height: 70%;
      padding: 0 0.1rem;
      border-radius: 0.3125rem 0.3125rem 0 0;
    }
  }
`;
