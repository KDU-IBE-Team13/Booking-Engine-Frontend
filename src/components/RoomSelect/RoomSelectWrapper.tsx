import React, { useState } from 'react';
import {RoomDropdown} from './RoomDropdown';
import { SelectChangeEvent } from '@mui/material';
import { RoomDropdownWrapper } from './RoomDropdownStyled';

const rooms = ['1', '2', '3', '4', '5'];

const RoomSelectWrapper: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState('');

  const handleRoomChange = (event: SelectChangeEvent) => {
    setSelectedRoom(event.target.value);
  };

  return (
    <RoomDropdownWrapper>
      <RoomDropdown rooms={rooms} value={selectedRoom} onChange={handleRoomChange} />
    </RoomDropdownWrapper>
  );
};

export default RoomSelectWrapper;