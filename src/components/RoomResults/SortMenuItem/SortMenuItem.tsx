import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoomsData, setSortOrder } from '../../../redux/slices/roomsSlice'; // Adjust the import path based on your project structure
import { AppDispatch, RootState } from '../../../redux/store';

const StyledButton = styled(Button)`
  && {
    text-transform: capitalize;
    color: #000;
    padding: 6px 20px;
    font-weight: 700;
    font-size: 16px;
  }
`;

export default function SortMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  const sortOrder = useSelector((state: RootState) => state.rooms.sortOrder);
  const currentPage = useSelector((state: RootState) => state.rooms.currentPage)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  // useEffect(() => {
  //   const checkInDate = localStorage.getItem('checkInDate') as string;
  //   const checkInDateISO = checkInDate.concat('T00:00:00.000Z');
  //   const checkOutDate = localStorage.getItem('checkOutDate') as string;
  //   const checkOutDateISO = checkOutDate.concat('T00:00:00.000Z');
  //   const propertyId = localStorage.getItem('propertyId') as string;
  //   const roomCount = Number(localStorage.getItem('roomCount'));
  //   const guestCountsString = localStorage.getItem('guestCounts') as string;
  //   const guestCounts = guestCountsString ? JSON.parse(guestCountsString) : {};
  //   const guestCountNum = guestCounts.adults + guestCounts.teens + guestCounts.kids;
  //   const bedCount = Number(localStorage.getItem('beds'));
  //   const currentPage = 1;

  //   console.log('in here')

  //   dispatch(fetchRoomsData(checkInDateISO, checkOutDateISO, propertyId, roomCount, guestCountNum,currentPage, bedCount));
  // }, [dispatch]);
  
  const handleSortChange = (sortOption: "asc" | "dsc") => {
    dispatch(setSortOrder(sortOption)); // Dispatch the setSortOrder action with the selected sort option
    setAnchorEl(null); // Close the menu after selection (optional)
    // Add logic to handle sorting based on the selected option
    console.log('Selected Sort:', sortOption);
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
    const sortOrder = sortOption;
    dispatch(fetchRoomsData(checkInDateISO, checkOutDateISO, propertyId, roomCount, guestCountNum,currentPage, bedCount, sortOrder));

  };

  return (
    <div>
      <StyledButton
        id="sort-button"
        aria-controls={anchorEl ? 'sort-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={anchorEl ? 'true' : undefined}
        onClick={handleClick}
      >
        Sort By <KeyboardArrowDownIcon />
      </StyledButton>
      <Menu
        id="sort-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={() => handleSortChange('asc')}>Price Ascending</MenuItem>
        <MenuItem onClick={() => handleSortChange('dsc')}>Price Descending</MenuItem>
      </Menu>
    </div>
  );
}
