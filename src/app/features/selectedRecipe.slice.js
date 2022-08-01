import { createSlice } from "@reduxjs/toolkit";

const selectedRecipeSlice = createSlice({
  name: "selectedRecipe",
  initialState: {},
  reducers: {
    loadRecipe: (state, action) => {},
    addToBasket: (state, action) => {},
    pinRecipe: (state, action) => {},
  },
});

export const { loadRecipe, addToBasket, pinRecipe } =
  selectedRecipeSlice.actions;
export default selectedRecipeSlice.reducer;
