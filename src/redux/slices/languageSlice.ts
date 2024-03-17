// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface LanguageState {
//   selectedLanguage: string;
// }

// const initialState: LanguageState = {
//   selectedLanguage: 'en',
// };

// const languageSlice = createSlice({
//   name: 'language',
//   initialState,
//   reducers: {
//     changeLanguage(state, action: PayloadAction<string>) {
//       state.selectedLanguage = action.payload;
//     },
//   },
// });

// export const { changeLanguage } = languageSlice.actions;

// export default languageSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LanguageState {
  selectedLanguage: {key: string, langName: string};
}

const initialState: LanguageState = {
  selectedLanguage: {key: 'en', langName: 'English'},
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguage(state, action: PayloadAction<{key: string, langName: string}>) {
      state.selectedLanguage.key = action.payload.key;
      state.selectedLanguage.langName = action.payload.langName;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;

export default languageSlice.reducer;
