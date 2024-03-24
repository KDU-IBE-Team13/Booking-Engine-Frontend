import { Box, FormControl, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FormControlStyled, MenuItemStyled } from "./BedMenuStyles";
import { useLocation } from "react-router-dom";
const BedMenu = () => {
const beds: number[] = [0, 1, 2, 3, 4, 5];
const location = useLocation();
const [selectedBeds, setSelectedBeds] = useState<number>(0);

// Retrieve beds count from URL params or localStorage
useEffect(() => {
  const searchParams = new URLSearchParams(location.search);
  const bedsParam = searchParams.get('beds');
  const bedsLocal = localStorage.getItem('beds');
  const beds = bedsParam ? Number(bedsParam) : (bedsLocal ? Number(bedsLocal) : 0);
  setSelectedBeds(beds);
}, [location.search]);

// Function to handle bed selection change
const handleBedChange = (event: SelectChangeEvent<number>) => {
  const beds = Number(event.target.value);
  setSelectedBeds(beds);

  // Update localStorage
  localStorage.setItem('beds', beds.toString());

  // Update URL parameters
  const searchParams = new URLSearchParams(location.search);
  searchParams.set('beds', beds.toString());
  const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
  window.history.replaceState({}, '', newUrl);
};


  const BedMenuInput = () => {
    return (
      <Box>
        <Typography fontSize={{ md: "0.7rem", xs: "0.875rem", lg: "0.875rem" }} color={"#858685"}>
          {"Beds"}
        </Typography>
        <Typography fontWeight={700}>0</Typography>
      </Box>
    );
  };

  return (
    <FormControlStyled>
      <Select
        sx={{
          "& .MuiSelect-select": {
            padding: "0.7rem",
          },
        }}
        renderValue={() => <BedMenuInput />}
        displayEmpty={true}
        defaultValue={selectedBeds}
        onChange={handleBedChange}
        IconComponent={KeyboardArrowDownIcon}
      >
        {beds.map((bed) => {
          return (
            <MenuItemStyled key={bed} value={bed}>
              <Typography data-testid="room-count" id="room-count">
                {bed}
              </Typography>
            </MenuItemStyled>
          );
        })}
      </Select>
    </FormControlStyled>
  );
};

export default BedMenu;