import { createSlice } from "@reduxjs/toolkit";

// Define the HomeState type
export interface HomeState {
  url: any;
  genres: any;
}

// Create the home slice
export const homeSlice = createSlice({
  name: "home",
  initialState: {
    url: {},
    genres: {},
  },
  reducers: {
    getApiConfiguration: (state, action) => {
      state.url = action.payload;
    },
    getGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

// Export action creators
export const { getApiConfiguration, getGenres } = homeSlice.actions;

// Export reducer
export default homeSlice.reducer;
