
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
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchRoomsData, setCurrentPage } from "../../../redux/slices/roomsSlice";
import { AppDispatch, RootState } from "../../../redux/store";
import { RoomsDetail } from "../../../types/ICard";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const CardContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const roomsData = useSelector((state: RootState) => state.rooms.roomsData);
  const currentPage = useSelector((state: RootState) => state.rooms.currentPage);
  const totalPages = Math.ceil(roomsData ? 6 / 3 : 0); 
  const sortOrder = useSelector((state: RootState) => state.rooms.sortOrder);
  const currentPage = useSelector((state: RootState) => state.rooms.currentPage)


  const [resultsRange, setResultsRange] = useState({ start: 0, end: 0 });

  useEffect(() => {
    const checkInDate = localStorage.getItem('checkInDate') as string;
    const checkInDateISO = checkInDate.concat('T00:00:00.000Z');
    const checkOutDate = localStorage.getItem('checkOutDate') as string;
    const checkOutDateISO = checkOutDate.concat('T00:00:00.000Z');
    const propertyId = localStorage.getItem('propertyId') as string;
    const roomCount = Number(localStorage.getItem('roomCount'));
    const guestCountsString = localStorage.getItem('guestCounts') as string;
    const guestCounts = guestCountsString ? JSON.parse(guestCountsString) : {};
    const guestCountNum = guestCounts.adults + guestCounts.teens + guestCounts.kids;
    const bedCount = Number(localStorage.getItem('beds'));

    dispatch(fetchRoomsData(checkInDateISO, checkOutDateISO, propertyId, roomCount, guestCountNum,currentPage, bedCount, sortOrder));
  }, [dispatch, currentPage]);


  useEffect(() => {
    const start = (currentPage - 1) * 3 + 1;
    const end = start+2;
    setResultsRange({ start, end });
  }, [currentPage, roomsData]);

  console.log(currentPage)
  const handleNextPage = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };
  
  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages || totalPages === 0;

  return (
    <CardContainerSection>
    <ContainerHeader>
      <RoomResultsText>Room Results</RoomResultsText>
      <SortSection>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div onClick={isPrevDisabled ? undefined : handlePrevPage} style={{ cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}>
          <ArrowBackIosIcon style={{ fontSize: '18px' }} />
        </div>
        <ResultsPaginationText>Showing {resultsRange.start} - {resultsRange.end} of {roomsData ? 6 : 0} results </ResultsPaginationText>
        <div onClick={isNextDisabled ? undefined : handleNextPage} style={{ cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}>
        <ArrowForwardIosIcon style={{ fontSize: '18px' }} />
        </div>
      </div>

          <SortMenu />
      </SortSection>   
    </ContainerHeader>
    <CardWrapper>
        {roomsData && roomsData.roomsDetails.map((room: RoomsDetail, index: number) => {
            return (
              <RoomCard
                key={room.roomTypeId}
                roomDetails={room}
              />
            );
        })}
      </CardWrapper>
    </CardContainerSection>
  );
};

export default CardContainer;
