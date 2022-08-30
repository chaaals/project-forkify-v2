import { createSlice } from "@reduxjs/toolkit";

const selectedFromBasketSlice = createSlice({
  name: "selectFromBasket",
  initialState: {},
  reducers: {
    loadSelectedModal: (state, action) => {
      return action.payload;
    },
    clearSelectFromBasket: () => {
      return [];
    },
  },
});

// selectors
export const selected = (state) => state.selectFromBasket;

// actions
export const { loadSelectedModal, clearSelectFromBasket } =
  selectedFromBasketSlice.actions;

export default selectedFromBasketSlice.reducer;
