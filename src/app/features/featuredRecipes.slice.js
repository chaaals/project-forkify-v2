import { createSlice } from "@reduxjs/toolkit";

const featuredRecipesSlice = createSlice({
  name: "featuredRecipes",
  initialState: [],
  reducers: {
    loadFeaturedRecipes: (state, action) => {},
  },
});

export const { loadFeaturedRecipes } = featuredRecipesSlice.actions;
export default featuredRecipesSlice.reducer;
