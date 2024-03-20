import { Box, FormControl, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FormControlStyled, MenuItemStyled } from "./BedMenuStyles";
const BedMenu = () => {
const beds = [0, 1, 2, 3, 4, 5];

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
        defaultValue=""
        // onChange={handleChange}
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