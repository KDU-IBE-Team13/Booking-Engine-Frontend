import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';

interface FilterOptions {
  minPrice?: number;
  maxPrice?: number;
  beds?: number;
  roomTypes?: string[];
  bedType?: string;
}


interface RoomsState {
  roomsData: any; 
  currentPage: number;
  sortOrder: 'asc' | 'dsc'; // New state to track sorting order
  filters: FilterOptions;
}

const initialState: RoomsState = {
  roomsData: null,
  currentPage: 1,
  sortOrder: 'asc',
  filters: {}
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
    setFilters: (state, action: PayloadAction<FilterOptions>) => {
      state.filters = action.payload;
    },
    setMinPrice: (state, action: PayloadAction<number>) => {
      state.filters.minPrice = action.payload;
    },
    setMaxPrice: (state, action: PayloadAction<number>) => {
      state.filters.maxPrice = action.payload;
    },
    setBeds: (state, action: PayloadAction<number>) => {
      state.filters.beds = action.payload;
    },
    setRoomTypes: (state, action: PayloadAction<string[]>) => {
      state.filters.roomTypes = action.payload;
    },
    setBedType: (state, action: PayloadAction<string>) => {
      state.filters.bedType = action.payload;
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
    sortOrder: 'asc' | 'dsc', // Add sortOrder parameter
    filters: FilterOptions
  ): AppThunk => async (dispatch) => {
    try {
      console.log('called')
      if(currentPage == 0)
      {fetchRoomsData
        currentPage = 1;
      }
      let apiUrl = `http://localhost:8080/api/v1/rooms/available-room-details?propertyId=${propertyId}&tenantId=1&page=${currentPage}&pageSize=3&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&sort=price&order=${sortOrder}`;
      if(bedCount > 0)
      {
        apiUrl += `&beds=${bedCount}`;
      }
      if (filters.minPrice !== undefined) {
        apiUrl += `&minPrice=${filters.minPrice}`;
      }
      if (filters.maxPrice !== undefined) {
        apiUrl += `&maxPrice=${filters.maxPrice}`;
      }
      if (filters.beds !== undefined) {
        apiUrl += `&beds=${filters.beds}`;
      }
      if (filters.roomTypes && filters.roomTypes.length > 0) {
        apiUrl += `&roomTypes=${filters.roomTypes.join(',')}`;
      }
      if (filters.bedType !== undefined) {
        apiUrl += `&bedType=${filters.bedType}`;
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
export const { setRoomsData, setCurrentPage, setSortOrder, setFilters, setBedType, setMaxPrice, setMinPrice, setBeds, setRoomTypes } = roomsSlice.actions;
