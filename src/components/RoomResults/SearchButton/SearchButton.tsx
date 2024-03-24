import Button from '@mui/material/Button';
import { StyledButton } from './SearchButtonStyles';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { fetchRoomsData, setCurrentPage } from '../../../redux/slices/roomsSlice';
import { useLocation } from 'react-router-dom';

const SearchButton = () => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation(); 

  const handleSearchClick = () => {
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
    const currentPage = 1;

    dispatch(fetchRoomsData(checkInDateISO, checkOutDateISO, propertyId, roomCount, guestCountNum, currentPage, bedCount));

    const searchParams = new URLSearchParams(location.search);
    searchParams.set('propertyId', propertyId);
    searchParams.set('checkInDate', checkInDate);
    searchParams.set('checkOutDate', checkOutDate);
    searchParams.set('rooms', roomCount.toString());
    searchParams.set('adults', guestCounts.adults);
    searchParams.set('teens', guestCounts.teens);
    searchParams.set('kids', guestCounts.kids);
    searchParams.set('beds', bedCount.toString());



    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
    window.history.replaceState({}, '', newUrl);

  };
  
  return (
    <StyledButton variant="contained" onClick={handleSearchClick}>
      Search Dates
    </StyledButton>
  )
};

export default SearchButton;
