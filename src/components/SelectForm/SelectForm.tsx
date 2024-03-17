import GuestDropdown from "../GuestDropdown/GuestDropDown";
import PropertyDropDown from "../PropertyDropDown/PropertyDropDown";
import { SelectFormStyled } from "./SelectFormStyles";
import RoomSelect from "../RoomSelect/RoomSelect";
import Calendar from "../Calendar/Calendar";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { FAILED_PROPERTY_RATES_FETCH_MESSAGE, NIGHTLY_RATE_ENDPOINT } from "../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchLandingPageConfig } from "../../redux/slices/landingPageConfigSlice";
import { useTranslation } from "react-i18next";
import { fetchExchangeRates } from "../../redux/slices/currencySlice";
import { IDate } from "../../types/IDate";

export const SelectForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [propertyRates, setPropertyRates] = useState<{ [key: string]: number }>({});
  const { t } = useTranslation();

  const bannerImageURL = useSelector((state: RootState) => state.landingPageConfig.bannerImageURL);
  const isGuestsDropdownEnabled = useSelector((state: RootState) => state.landingPageConfig.searchForm.guests.enabled);
  const isRoomsDropdownEnabled = useSelector((state: RootState) => state.landingPageConfig.searchForm.rooms.enabled);
  const selectedCurrency = useSelector((state: RootState) => state.currency.selectedCurrency);
  const selectedCurrencySymbol = useSelector((state: RootState) => state.currency.selectedCurrencySymbol);
  const exchangeRate = useSelector((state: RootState) => state.currency.exchangeRates[selectedCurrency]);

  useEffect(() => {
    dispatch(fetchLandingPageConfig());
    dispatch(fetchExchangeRates());
  }, [dispatch]);

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
    const currentDateISO = currentDate.toISOString().split("T")[0] + "T00:00:00.000Z";
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
      
    return <p className="tileContentPrice">{convertedPrice != null ? `${selectedCurrencySymbol}${convertedPrice}` : "-"}</p>;
  };

  return (
    <SelectFormStyled backgroundimage={bannerImageURL}>
      <form className="searchForm">
        <PropertyDropDown />
        <Calendar tileContent={tileContent} />
        <div className="roomsSpecification">
          {isGuestsDropdownEnabled && <GuestDropdown />}
          {isRoomsDropdownEnabled && <RoomSelect />}
        </div>
        <Button variant="contained" className="searchButton">{t('landingPage.search')}</Button>
      </form>
    </SelectFormStyled>
  );
};
