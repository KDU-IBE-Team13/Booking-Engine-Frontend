import BedMenu from "../BedMenu/BedMenu";
import RoomSelectWrapper from "../../RoomResults/RoomSelect/RoomSelectWrapper";
import GuestDropdown from "../GuestDropdown/GuestDropdown";
import { RoomSearchFormWrapper } from "./RoomSearchFormStyles";
import RoomCalendar from "../Calendar/RoomCalendar";
import SearchButton from "../SearchButton/SearchButton";

const RoomSearchForm = () => {
  return (
    <RoomSearchFormWrapper>
      <GuestDropdown />
      <RoomSelectWrapper />
      <BedMenu />
      <RoomCalendar />
      <SearchButton />
    </RoomSearchFormWrapper>
  )
};

export default RoomSearchForm;
