import { useState } from "react";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const RoomSelect = () => {
  const [age, setAge] = useState<number | string>("");

  const handleChange = (event: SelectChangeEvent<number | string>) => {
    setAge(event.target.value as number | string);
  };

  return (
    <div>
      <FormControl fullWidth sx={{ width: 100 }}>
        <label htmlFor="properties" className="property room-property">
          Rooms
        </label>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
          sx={{ width: "77px", marginLeft: "14px" }}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default RoomSelect;
