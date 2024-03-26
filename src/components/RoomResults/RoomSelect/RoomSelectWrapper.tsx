import React, { useState } from 'react';
import {RoomDropdown} from './RoomDropdown';
import { SelectChangeEvent } from '@mui/material';
import { RoomDropdownWrapper } from './RoomDropdownStyled';


const RoomSelectWrapper: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState('');

  const handleRoomChange = (event: SelectChangeEvent) => {
    setSelectedRoom(event.target.value);
  };

  return (
    <RoomDropdownWrapper>
      <RoomDropdown />
    </RoomDropdownWrapper>
  );
};

export default RoomSelectWrapper;