import { createSlice } from "@reduxjs/toolkit";

const pinnedRecipesSlice = createSlice({
  name: "pinnedRecipes",
  initialState: [],
  reducers: {
    pinRecipe: (state, action) => {},
    removeRecipe: (state, action) => {},
  },
});

export const { removeRecipe } = pinnedRecipesSlice.actions;
export default pinnedRecipesSlice.reducer;
