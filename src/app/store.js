import { configureStore } from "@reduxjs/toolkit";

// reducers
import ingredientBasketReducer from "../app/features/ingredientBasket.slice";
import pinnedRecipesReducer from "../app/features/pinnedRecipes.slice";
import searchedRecipesReducer from "../app/features/searchedRecipes.slice";
import selectedRecipeReducer from "../app/features/selectedRecipe.slice";

const rootReducer = {
  ingredientBasket: ingredientBasketReducer,
  pinnedRecipes: pinnedRecipesReducer,
  searchedRecipes: searchedRecipesReducer,
  selectedRecipe: selectedRecipeReducer,
};

export default configureStore({
  reducer: rootReducer,
});
