import { useState } from "react";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const RoomSelect = () => {
  const [rooms, setRooms] = useState<number | "">(1);

  const roomOptions = [1, 2, 3, 4];

  const handleChange = (event: SelectChangeEvent<number | "">) => {
    setRooms(event.target.value as number | "");
  };

  return (
    <div>
      <FormControl>
        <label className="property">Rooms</label>
        <Select
          value={rooms}
          onChange={handleChange}
          className="rooms-dropdown"
          displayEmpty
        >
          {roomOptions.map((room, index) => (
            <MenuItem key={index} value={room}>
              {room}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default RoomSelect;
