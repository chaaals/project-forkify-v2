import { createSlice } from "@reduxjs/toolkit";
import { fetchSelectedRecipe } from "../../api/fetchSelectedRecipe";

const selectedRecipeSlice = createSlice({
  name: "selectedRecipe",
  initialState: {},
  reducers: {
    loadRecipe: (state, action) => {
      return action.payload;
    },
  },
});

// selector
export const selectedRecipe = (state) => state.selectedRecipe;

// thunk action creator
export const loadSelectedRecipe = (RECIPE_ID) => {
  return async (dispatch) => {
    const payload = await fetchSelectedRecipe(RECIPE_ID);
    const { recipe } = payload.data;
    dispatch({ type: "selectedRecipe/loadRecipe", payload: recipe });
  };
};

export default selectedRecipeSlice.reducer;
