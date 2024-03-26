import BedMenu from "../BedMenu/BedMenu";
import RoomSelectWrapper from "../../RoomResults/RoomSelect/RoomSelectWrapper";
import GuestDropdown from "../GuestDropdown/GuestDropdown";
import { RoomSearchFormWrapper } from "./RoomSearchFormStyles";
import RoomCalendar from "../Calendar/RoomCalendar";
import SearchButton from "../SearchButton/SearchButton";
import { useEffect, useState } from "react";
import { NIGHTLY_RATE_ENDPOINT, FAILED_PROPERTY_RATES_FETCH_MESSAGE } from "../../../constants/constants";
import { IDate } from "../../../types/IDate";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";

const RoomSearchForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [propertyRates, setPropertyRates] = useState<{ [key: string]: number }>(
    {}
  );
  const [selectedProperties, setSelectedProperties] = useState<string[]>(
    []
  );

  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [rooms, setRooms] = useState<number>(1);
 
  const selectedCurrency = useSelector(
    (state: RootState) => state.currency.selectedCurrency
  );
  const selectedCurrencySymbol = useSelector(
    (state: RootState) => state.currency.selectedCurrencySymbol
  );
  const exchangeRate = useSelector(
    (state: RootState) => state.currency.exchangeRates[selectedCurrency]
  );


  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(NIGHTLY_RATE_ENDPOINT);
        if (!response.ok) {
          throw new Error(FAILED_PROPERTY_RATES_FETCH_MESSAGE);
        }
        const data = await response.json();
        setPropertyRates(data.nightlyRates);
      } catch (error) {
        console.error(FAILED_PROPERTY_RATES_FETCH_MESSAGE, error);
      }
    };
    fetchData();
  }, []);

  const tileContent = ({ date }: IDate) => {
    const currentDate = new Date();
    const currentDateISO =
      currentDate.toISOString().split("T")[0] + "T00:00:00.000Z";
    const nextDate = new Date(date);
    nextDate.setDate(nextDate.getDate() + 1);
    const nextDateISO = nextDate.toISOString().split("T")[0] + "T00:00:00.000Z";
    if (nextDateISO < currentDateISO) {
      return null;
    }
    const price = propertyRates[nextDateISO] ?? null;
    let convertedPrice;

    if (selectedCurrency === "USD") {
      convertedPrice = price;
    } else {
      if (price != null && exchangeRate != null) {
        const tempConvertedPrice = (price * exchangeRate).toFixed(1);
        if (tempConvertedPrice.length > 5) {
          convertedPrice = Number(tempConvertedPrice).toPrecision(4);
        } else {
          convertedPrice = tempConvertedPrice;
        }
      } else {
        convertedPrice = null;
      }
    }

    return (
      <p className="tileContentPrice">
        {convertedPrice != null
          ? `${selectedCurrencySymbol}${convertedPrice}`
          : "-"}
      </p>
    );
  };
  return (
    <RoomSearchFormWrapper>
      <GuestDropdown />
      <RoomSelectWrapper />
      <BedMenu />
      <RoomCalendar  
          tileContent={tileContent}
          propertyRates={propertyRates}
          checkInDate={checkInDate}
          setCheckInDate={setCheckInDate}
          checkOutDate={checkOutDate}
          setCheckOutDate={setCheckOutDate}
        />
      <SearchButton />
    </RoomSearchFormWrapper>
  )
};

export default RoomSearchForm;
