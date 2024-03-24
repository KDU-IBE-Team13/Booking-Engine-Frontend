import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import RoomsContainer from "../../components/RoomResults/RoomResultsContainer/RoomResultsContainer";
import Header from "../../components/HeaderRooms/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoomsData } from "../../redux/slices/roomsSlice";
import { AppDispatch, RootState } from "../../redux/store";
import { useLocation } from "react-router-dom";

export const RoomsPage = () => {

  const dispatch = useDispatch<AppDispatch>();
  // const roomsData = useSelector((state: RootState) => state.rooms.roomsData);
  const location = useLocation();

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

    dispatch(fetchRoomsData(checkInDateISO, checkOutDateISO, propertyId, roomCount, guestCountNum, bedCount));
  }, [dispatch, location.pathname]);


  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    const propertyId = searchParams.get('propertyId');
    const checkInDate = searchParams.get('checkInDate');
    const checkOutDate = searchParams.get('checkOutDate');
    const adults = searchParams.get('adults');
    const teens = searchParams.get('teens');
    const kids = searchParams.get('kids');
    const rooms = searchParams.get('rooms');
    const beds = searchParams.get('beds');

    const guestCounts = {
      adults: adults ? Number(adults) : 1,
      teens: teens ? Number(teens) : 0,
      kids: kids ? Number(kids) : 0,
    };

    if (propertyId) localStorage.setItem('propertyId', propertyId);
    if (checkInDate) localStorage.setItem('checkInDate', checkInDate);
    if (checkOutDate) localStorage.setItem('checkOutDate', checkOutDate);
    if (rooms) localStorage.setItem('rooms', rooms);
    if (beds) localStorage.setItem('beds', beds);
    localStorage.setItem('guestCounts', JSON.stringify(guestCounts));
    
  }, [location.search]);



  useEffect(() => {
    routeChange();
  }, []); 

  const routeChange = () => { 

    const propertyId = localStorage.getItem('propertyId');

    const checkInDate = localStorage.getItem('checkInDate');
    const checkOutDate = localStorage.getItem('checkOutDate');

    const guestCountsString = localStorage.getItem('guestCounts');
    const guestCounts = guestCountsString ? JSON.parse(guestCountsString) : {};
    const adultCount = guestCounts?.["adults"] ?? 1;
    const teenCount = guestCounts?.["teens"] ?? 0;
    const childCount = guestCounts?.["kids"] ?? 0;

    const roomCount = localStorage.getItem('roomCount');
    const roomCountNum = roomCount ? Number(roomCount) : 1;

    let searchParams = `?propertyId=${propertyId}&`;
    if (checkInDate && checkOutDate) {
      searchParams += `checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&`;
    }

    searchParams += `adults=${adultCount}&teens=${teenCount}&kids=${childCount}&rooms=${roomCountNum}`;

    const newUrl = `${window.location.pathname}${searchParams.toString()}`;
    window.history.replaceState({}, '', newUrl);

  };



  return (
    <>
      <Header />
      <RoomsContainer />
      <Footer />
    </>
  );
};

