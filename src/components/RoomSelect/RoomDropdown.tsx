import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, FormControl, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { t } from 'i18next';


interface RoomDropdownProps {
  rooms: string[];
  value: string;
  onChange: (event: SelectChangeEvent) => void;
}

const RoomMenuInput = () => {
  return (
    <Box>
      <Typography fontSize={{ md: "0.7rem", xs: "0.875rem", lg: "0.875rem" }} color={"#858685"}>
        {"Rooms"}
      </Typography>
      <Typography fontWeight={700}>0</Typography>
    </Box>
  );
};

export const RoomDropdown: React.FC<RoomDropdownProps> = ({ rooms, value, onChange }) => {
  return (
    <FormControl fullWidth>
    <Select
      sx={{
          "& .MuiSelect-select": {
            padding: "0.7rem",
          },
      }}
      renderValue={() => <RoomMenuInput />}
      displayEmpty={true}
      defaultValue=""
        // onChange={handleChange}
      IconComponent={KeyboardArrowDownIcon}
    >
      <MenuItem value="" disabled>
        Rooms
      </MenuItem>
      {rooms.map((room) => (
        <MenuItem key={room} value={room}>
          {room}
        </MenuItem>
      ))}
    </Select>
    </FormControl>
  );
};

