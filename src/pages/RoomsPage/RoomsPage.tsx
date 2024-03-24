import { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import RoomsContainer from "../../components/RoomResults/RoomResultsContainer/RoomResultsContainer";

export const RoomsPage = () => {
  useEffect(() => {
    routeChange();
  }, []); 

  const routeChange = () => { 
    // const path = `/room-results`;

    const checkInDate = localStorage.getItem('checkInDate');
    const checkOutDate = localStorage.getItem('checkOutDate');

    const guestCountsString = localStorage.getItem('guestCounts');
    const guestCounts = guestCountsString ? JSON.parse(guestCountsString) : {};
    const adultCount = guestCounts?.["adults"] ?? 1;
    const teenCount = guestCounts?.["teens"] ?? 0;
    const childCount = guestCounts?.["kids"] ?? 0;

    const roomCount = localStorage.getItem('roomCount');
    const roomCountNum = roomCount ? Number(roomCount) : 1;

    let searchParams = '?';
    if (checkInDate && checkOutDate) {
      searchParams += `checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&`;
    }

    searchParams += `adults=${adultCount}&teens=${teenCount}&kids=${childCount}&rooms=${roomCountNum}`;

    const newUrl = `${window.location.pathname}${searchParams.toString()}`;
    window.history.replaceState({}, '', newUrl);

    // navigate(path + searchParams);
  };

  return (
    <>
      {/* <Header /> */}
      <RoomsContainer />
      {/* <Footer /> */}
    </>
  );
};

// export default RoomsPage;
