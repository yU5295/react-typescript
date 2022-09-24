import { createReducer } from "@reduxjs/toolkit";
import { updateMatchesDarkMode, updateUserDarkMode } from "./actions";

const currentTimestamp = () => new Date().getTime();

export interface UserState {
  userDarkMode: boolean; // the user's choice for dark mode or light mode
  matchesDarkMode: boolean; // whether the dark mode media query matches
  timestamp: number;
}

export const initialState: UserState = {
  userDarkMode: true,
  matchesDarkMode: true,
  timestamp: currentTimestamp(),
};

export default createReducer(initialState, (builder) =>
  builder
    .addCase(updateUserDarkMode, (state, action) => {
      state.userDarkMode = action.payload.userDarkMode;
      state.timestamp = currentTimestamp();
    })
    .addCase(updateMatchesDarkMode, (state, action) => {
      state.matchesDarkMode = action.payload.matchesDarkMode;
      state.timestamp = currentTimestamp();
    })
);
