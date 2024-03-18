import { useState } from "react";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useTranslation } from "react-i18next";

const RoomSelect = () => {
  const [rooms, setRooms] = useState<number | "">(1);

  const { t } = useTranslation();

  const roomOptions = useSelector(
    (state: RootState) => state.landingPageConfig.searchForm.rooms.options
  )

  const handleChange = (event: SelectChangeEvent<number | "">) => {
    setRooms(event.target.value as number | "");
  };

  return (
    <div>
      <FormControl>
        <label className="property">{t('landingPage.roomsLabel')}</label>
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
