import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';


interface RoomsState {
  roomsData: any; 
  currentPage: number;
  sortOrder: 'asc' | 'dsc'; // New state to track sorting order
}

const initialState: RoomsState = {
  roomsData: null,
  currentPage: 1,
  sortOrder: 'asc', // Default sorting order
};


const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    setRoomsData: (state, action: PayloadAction<any>) => {
      state.roomsData = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
        state.currentPage = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<'asc' | 'dsc'>) => { // Action to set sorting order
      state.sortOrder = action.payload;
    },
  },
});


export const fetchRoomsData = (
    checkInDate: string,
    checkOutDate: string,
    propertyId: string,
    roomCount: number,
    guestCountNum: number,
    currentPage: number,
    bedCount: number,
    sortOrder: 'asc' | 'dsc' // Add sortOrder parameter
  ): AppThunk => async (dispatch) => {
    try {
      console.log('called')
      if(currentPage == 0)
      {
        currentPage = 1;
      }
      let apiUrl = `http://localhost:8080/api/v1/rooms/available-room-details?propertyId=${propertyId}&tenantId=1&page=${currentPage}&pageSize=3&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&sort=price&order=${sortOrder}`;
      if(bedCount > 0)
      {
        apiUrl += `&beds=${bedCount}`;
      }
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log(data);
      dispatch(setRoomsData(data));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

export default roomsSlice.reducer;
export const { setRoomsData, setCurrentPage, setSortOrder } = roomsSlice.actions;
