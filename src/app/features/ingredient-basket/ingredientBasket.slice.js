import { createSlice } from "@reduxjs/toolkit";

const ingredientBasketSlice = createSlice({
  name: "ingredientBasket",
  initialState: [],
  reducers: {
    addToBasket: (state, action) => {
      return [...state, action.payload];
    },
    removeFromBasket: () => {},
  },
});

// selectors
export const basketIngredients = (state) => state.ingredientBasket;

// actions
export const { addToBasket, removeFromBasket } = ingredientBasketSlice.actions;

export default ingredientBasketSlice.reducer;
