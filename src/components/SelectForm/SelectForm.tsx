import GuestDropdown from "../GuestDropdown/GuestDropDown";
import PropertyDropDown from "../PropertyDropDown/PropertyDropDown";
import { SelectFormStyled } from "./SelectFormStyles";
import RoomSelect from "../RoomSelect/RoomSelect";
import Calender from "../Calender/Calender";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { FAILED_DATA_MESSAGE } from "../../Constants/Constants";

export const SelectForm = () => {
  const [propertyRates, setPropertyRates] = useState<{ [key: string]: number }>(
    {}
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/v1/nightly-rate"
        );
        if (!response.ok) {
          throw new Error(FAILED_DATA_MESSAGE);
        }
        const data = await response.json();
        setPropertyRates(data);
      } catch (error) {
        console.error("Error fetching property rates:", error);
      }
    };

    fetchData();
  }, []);

  const tileContent = ({ date }: any) => {
    const currentDate = new Date();
    const currentDateISO =
      currentDate.toISOString().split("T")[0] + "T00:00:00.000Z";

    const nextDate = new Date(date);
    nextDate.setDate(nextDate.getDate() + 1);
    const nextDateISO = nextDate.toISOString().split("T")[0] + "T00:00:00.000Z";

    if (nextDateISO < currentDateISO) {
      return null;
    }

    const price =
      propertyRates[nextDateISO] !== undefined
        ? propertyRates[nextDateISO]
        : null;

    return (
      <p className="tileContentPrice">
        {price != null && "$"}
        {price}
      </p>
    );
  };

  return (
    <SelectFormStyled>
      <form className="searchForm">
        <PropertyDropDown />

        <Calender tileContent={tileContent} />

        <div className="roomsSpecification">
          <GuestDropdown />
          <RoomSelect />
        </div>
        <Button variant="contained" className="searchButton">
          Search
        </Button>
      </form>
    </SelectFormStyled>
  );
};
