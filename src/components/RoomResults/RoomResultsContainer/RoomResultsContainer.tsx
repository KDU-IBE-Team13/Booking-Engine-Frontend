import BedMenu from "../BedMenu/BedMenu";
import Filter from "../../FilterSection/Filter";
import RoomBanner from "../../RoomBanner/RoomBanner";
import RoomCard from "../RoomCard/RoomCard";
import RoomSearchForm from "../RoomSearchForm/RoomSearchForm";
import CustomStepper from "../Stepper/CustomStepper";
import { RoomsContainerWrapper } from "./RoomResultsContainerStyles";
import ResultContainer from "../ResultSection/ResultSection";

const RoomsContainer = () => {
  return (
    <RoomsContainerWrapper>
      <RoomBanner />
      <CustomStepper />
      {/* <Filter /> */}
      <RoomSearchForm />
      <ResultContainer />
      {/* <RoomResultRoomSelect /> */}
    </RoomsContainerWrapper>
  );
};

export default RoomsContainer;
