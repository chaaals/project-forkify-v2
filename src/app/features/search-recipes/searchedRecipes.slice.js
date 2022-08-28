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
    clearFetchedRecipes: () => {
      return [];
    },
  },
});

// selectors
export const searchRecipes = (state) => state.searchedRecipes;

// actions and thunk action creator
export const { clearFetchedRecipes } = searchedRecipesSlice.actions;
export const queryRecipe = (query) => {
  return async (dispatch, getState) => {
    try {
      const payload = await fetchRecipes(query);
      const { recipes } = payload.data;
      dispatch({
        type: "searchedRecipes/fetchRecipes",
        payload: recipes,
      });
    } catch (e) {
      console.log(e.message);
    }
  };
};

export default searchedRecipesSlice.reducer;
