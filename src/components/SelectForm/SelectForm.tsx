import GuestDropdown from "../GuestDropdown/GuestDropDown";
import PropertyDropDown from "../PropertyDropDown/PropertyDropDown";
import { SelectFormStyled } from "./SelectFormStyles";
import RoomSelect from "../RoomSelect/RoomSelect";
import Calender from "../Calender/Calender";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

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
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log("data: ", data);
        setPropertyRates(data);
      } catch (error) {
        console.error("Error fetching property rates:", error);
      }
    };

    fetchData();
  }, []);

  const tileContent = ({ date }: any) => {
    const next = new Date(date);
    next.setDate(next.getDate() + 1);
    const nextISO = next.toISOString().split("T")[0] + "T00:00:00.000Z";
    console.log(propertyRates[nextISO]);
    console.log(date);
    const price =
      propertyRates[nextISO] !== undefined ? propertyRates[nextISO] : null;

    return (
      <p
        style={{
          textAlign: "center",
          margin: 0,
          fontWeight: 400,
          fontSize: "0.875rem",
        }}
      >
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
