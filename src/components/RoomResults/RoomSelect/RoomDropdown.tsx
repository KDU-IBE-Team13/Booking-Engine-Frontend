import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Box, FormControl, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { t } from 'i18next';
import { useLocation } from 'react-router-dom';


export const RoomDropdown = () => {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const roomCountStr = searchParams.get('roomCount');

  const roomCountLocalStr = localStorage.getItem('roomCount');
  const roomCountLocal  = roomCountLocalStr ? Number(roomCountLocalStr): 1;

  let roomCountParam;

  if(roomCountStr)
  {
    roomCountParam = Number(roomCountStr);
    localStorage.setItem('roomCount', roomCountParam.toString());
  }
  else
  {
    roomCountParam = roomCountLocal;
  }

  const [selectedRoom, setSelectedRoom] = useState<string | number>(roomCountParam);

  useEffect(() => {

    localStorage.setItem('roomCount', selectedRoom.toString());
  }, [selectedRoom, location.search]);

  const handleRoomChange = (event: SelectChangeEvent<string | number>) => {
    setSelectedRoom(event.target.value);
  };

  const rooms = [1, 2, 3, 4, 5];


  const RoomMenuInput = () => {
    return (
      <Box>
        <Typography fontSize={{ md: "0.7rem", xs: "0.875rem", lg: "0.875rem" }} color={"#858685"}>
        {t('roomPage.roomsLabelroom')}
        </Typography>
        <Typography fontWeight={700}>{selectedRoom}</Typography>
      </Box>
    );
  };

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
      defaultValue={roomCountParam}
      onChange={handleRoomChange}
      IconComponent={KeyboardArrowDownIcon}
    >
      <MenuItem value={selectedRoom} disabled>
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

