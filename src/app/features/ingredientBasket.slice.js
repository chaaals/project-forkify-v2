import { createSlice } from "@reduxjs/toolkit";

const ingredientBasketSlice = createSlice({
  name: "ingredientBasket",
  initialState: [],
  reducers: {
    addToBasket: (state, action) => {},
    pinRecipe: (state, action) => {},
  },
});

export default ingredientBasketSlice.reducer;
