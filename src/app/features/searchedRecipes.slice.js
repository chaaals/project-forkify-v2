import { createSlice } from "@reduxjs/toolkit";

const searchedRecipesSlice = createSlice({
  name: "searchedRecipes",
  initialState: [],
  reducers: {
    searchFoodRecipe: (state, action) => {},
  },
});

export const { searchFoodRecipe } = searchedRecipesSlice.actions;
export default searchedRecipesSlice.reducer;
