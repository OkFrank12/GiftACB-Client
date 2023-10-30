import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
  newToggle: false,
  giftUser: {} || null,
};

const GlobalState = createSlice({
  name: "states",
  initialState,
  reducers: {
    onToggleState: (state, { payload }) => {
      state.toggle = payload;
    },
    onNewToggle: (state, { payload }) => {
      state.newToggle = payload;
    },
    onUserState: (state, { payload }) => {
      state.giftUser = payload;
    },
    onLogOut: (state) => {
      state.giftUser = null;
    },
  },
});

export const { onToggleState, onNewToggle, onUserState, onLogOut } =
  GlobalState.actions;

export default GlobalState.reducer;
