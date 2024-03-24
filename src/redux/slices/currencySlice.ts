import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import { ICurrency } from '../../types/ICurrency';
import { FRANKFURTER_CURRENCY_API_ENDPOINT } from '../../constants/constants';
import { ICurrencyState } from '../../types/ICurrencyState';


const initialState: ICurrencyState = {
  exchangeRates: {},
  loading: false,
  error: null,
  selectedCurrency: 'USD',
  selectedCurrencySymbol: '$'
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    fetchExchangeRatesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchExchangeRatesSuccess(state, action: PayloadAction<Record<string, number>>) {
      state.loading = false;
      state.exchangeRates = action.payload;
    },
    fetchExchangeRatesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    setSelectedCurrency(state, action: PayloadAction<ICurrency>) {
      state.selectedCurrency = action.payload.currency;
      state.selectedCurrencySymbol = action.payload.currencySymbol
    },
  },
});

export const { fetchExchangeRatesStart, fetchExchangeRatesSuccess, fetchExchangeRatesFailure, setSelectedCurrency } = currencySlice.actions;

export default currencySlice.reducer;

export const fetchExchangeRates = (): AppThunk => async (dispatch) => {
  try {
    dispatch(fetchExchangeRatesStart());
    const response = await fetch(FRANKFURTER_CURRENCY_API_ENDPOINT);
    if (!response.ok) {
      throw new Error('Failed to fetch exchange rates');
    }
    const data = await response.json();
    dispatch(fetchExchangeRatesSuccess(data.rates));
  } catch (error: any) {
    dispatch(fetchExchangeRatesFailure(error.message));
  }
};

export const selectCurrency = (currency: ICurrency): AppThunk => async (dispatch) => {
  dispatch(setSelectedCurrency(currency));
};
