import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import currencyReducer from './slices/currencySlice';
import languageReducer from './slices/languageSlice';
import configReducer from './slices/configSlice';
import landingPageConfigReducer from './slices/landingPageConfigSlice';
import roomsReducer from './slices/roomsSlice';

export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    language: languageReducer,
    config: configReducer,
    landingPageConfig: landingPageConfigReducer,
    rooms: roomsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export type AppDispatch = typeof store.dispatch;

export default store;
