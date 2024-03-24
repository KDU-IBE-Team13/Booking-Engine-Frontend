import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';

interface RoomsState {
  roomsData: any; 
  currentPage: number;
}

const initialState: RoomsState = {
  roomsData: null,
  currentPage: 1,
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
  },
});


export const fetchRoomsData = (
    checkInDate: string,
    checkOutDate: string,
    propertyId: string,
    roomCount: number,
    guestCountNum: number,
    currentPage: number = 1,
    bedCount: number = 1
  ): AppThunk => async (dispatch) => {
    try {
      const apiUrl = `http://localhost:8080/api/v1/rooms/available-room-details?propertyId=${propertyId}&tenantId=1&page=${currentPage}&pageSize=3&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&beds=${bedCount}&sort=price&order=asc`;
      
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
export const { setRoomsData, setCurrentPage } = roomsSlice.actions;
