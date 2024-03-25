
import RoomCard from "../RoomCard/RoomCard";
import { CardContainerSection, CardWrapper, ContainerHeader, ResultsPaginationText, RoomResultsText, SortSection } from "./CardContainerStyles";
import roomPic1 from "../../../assets/room-pic-1.jpg";
import roomPic2 from "../../../assets/room-pic-2.jpg";
import roomPic3 from "../../../assets/room-pic-3.jpg";
import roomPic4 from "../../../assets/room-pic-4.jpg";
import roomPic5 from "../../../assets/room-pic-5.jpg";
import roomPic6 from "../../../assets/room-pic-6.jpg";
import Itinerary from "../../TripItineraryPanel/Itinerary";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import SortMenu from "../SortMenuItem/SortMenuItem";
import { useTranslation } from "react-i18next";

const CardContainer = () => {
  const {t} = useTranslation();
  return (
    <CardContainerSection>
    <ContainerHeader>
      <RoomResultsText>{t('roomPage.roomResults')}</RoomResultsText>
      <SortSection>
        <ResultsPaginationText>{t('roomPage.showingLabel')} 1-4 of 5 {t('roomPage.resultsLabel')} | </ResultsPaginationText>
        <SortMenu />
      </SortSection>   
    </ContainerHeader>
    <CardWrapper>
       <RoomCard carouselImg1={roomPic1} carouselImg2={roomPic2} carouselImg3={roomPic3}/>
       <RoomCard carouselImg1={roomPic4} carouselImg2={roomPic5} carouselImg3={roomPic6}/>
       <Itinerary />
    </CardWrapper>
    </CardContainerSection>
  );
};

export default CardContainer;
