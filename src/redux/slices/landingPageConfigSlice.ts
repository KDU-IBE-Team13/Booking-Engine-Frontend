import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { LANDING_PAGE_CONFIGURATION_ENDPOINT } from '../../constants/constants';
import { ILandingPageConfigState } from '../../types/ILandingPageConfigState';

export const fetchLandingPageConfig = createAsyncThunk(
    'config/fetchLandingPageConfig',
    async () => {
      const url = LANDING_PAGE_CONFIGURATION_ENDPOINT;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch landing page configuration');
        }
        const responseJson = await response.json();
        return responseJson;
      } catch (error) {
        throw new Error((error as Error).message);
      }
    }
);

export const updateLandingPageConfig = createAsyncThunk(
    'config/updateLandingPageConfig',
    async (updatedConfig) => {
      const url = LANDING_PAGE_CONFIGURATION_ENDPOINT;
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedConfig),
        });
        if (!response.ok) {
          throw new Error('Failed to update landing page configuration');
        }
        console.log('Landing config updated successfully');
        return await response.json();
      } catch (error) {
        throw new Error((error as Error).message);
      }
    }
);


const initialState: ILandingPageConfigState = {
  bannerImageURL: '',
  searchForm: {
    lengthOfStay: 14,
    guests: {
      enabled: true,
      maxGuests: 5,
      guestTypes: [
        { type: 'Adults', maxCount: 4, ageRange: '18+', enabled: true },
        { type: 'Teens', maxCount: 2, ageRange: '13-17', enabled: true },
        { type: 'Kids', maxCount: 3, ageRange: '0-12', enabled: true },
      ],
    },
    rooms: {
      enabled: true,
      options: [1, 2, 3, 4, 5],
    },
    wheelchairAccessible: true,
  },
  loading: false,
  error: null,
};

const landingPageConfigSlice = createSlice({
  name: 'landingPageConfig',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLandingPageConfig.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLandingPageConfig.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.bannerImageURL) {
          state.bannerImageURL = action.payload.bannerImageURL;
        }
        state.searchForm = action.payload.searchForm;
      })
      .addCase(fetchLandingPageConfig.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })
  },
});

export default landingPageConfigSlice.reducer;
