import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { FOOTER_CONFIGURATION_ENDPOINT, HEADER_CONFIGURATION_ENDPOINT } from '../../constants/constants';
import { ILanguageState } from '../../types/ILanguageState';

export const fetchHeaderConfig = createAsyncThunk(
    'config/fetchHeaderConfig',
    async () => {
      const url = HEADER_CONFIGURATION_ENDPOINT;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch header configuration');
        }
        const responseJson = await response.json();
        return responseJson;
      } catch (error) {
        throw new Error((error as Error).message);
      }
    }
);
  

export const fetchFooterConfig = createAsyncThunk(
    'config/fetchFooterConfig',
    async () => {
      const url = FOOTER_CONFIGURATION_ENDPOINT;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch footer configuration');
        }
        const responseJson = await response.json();
        return responseJson;
      } catch (error) {
        throw new Error((error as Error).message);
      }
    }
);
  


const initialState: ILanguageState = {
    headerConfig: {
      logo: '',
      supportedLanguages: [],
      supportedCurrencies: [],
      title: '',
    },
    footerConfig: {
        logo: '',
        companyName: ''
    },
    loading: false,
    error: null,
};

const configSlice = createSlice({
  name: 'config',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeaderConfig.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHeaderConfig.fulfilled, (state, action) => {
        state.loading = false;
        state.headerConfig = action.payload;
      })
      .addCase(fetchHeaderConfig.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })
      .addCase(fetchFooterConfig.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFooterConfig.fulfilled, (state, action) => {
        state.loading = false;
        state.footerConfig = action.payload;
      })
      .addCase(fetchFooterConfig.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      });
  },
});

export default configSlice.reducer;
