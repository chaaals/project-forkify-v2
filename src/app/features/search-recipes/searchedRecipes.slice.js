import { createSlice } from "@reduxjs/toolkit";
import { fetchRecipes } from "../../api/fetchData";

// reducer
const searchedRecipesSlice = createSlice({
  name: "searchedRecipes",
  initialState: [],
  reducers: {
    fetchRecipes: (state, action) => {
      return [...action.payload];
    },
  },
});

// selectors
export const searchRecipes = (state) => state.searchedRecipes;

// thunk action creator
export const queryRecipe = (query) => {
  return async (dispatch, getState) => {
    const payload = await fetchRecipes(query);
    const { recipes } = payload.data;
    dispatch({
      type: "searchedRecipes/fetchRecipes",
      payload: recipes,
    });
  };
};

export default searchedRecipesSlice.reducer;
