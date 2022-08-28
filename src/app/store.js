import { configureStore } from "@reduxjs/toolkit";

// reducers
import ingredientBasketReducer from "../app/features/ingredient-basket/ingredientBasket.slice";
import pinnedRecipesReducer from "../app/features/pinnedRecipes.slice";
import searchedRecipesReducer from "../app/features/search-recipes/searchedRecipes.slice";
import selectedRecipeReducer from "../app/features/selected-recipe/selectedRecipe.slice";

const rootReducer = {
  ingredientBasket: ingredientBasketReducer,
  pinnedRecipes: pinnedRecipesReducer,
  searchedRecipes: searchedRecipesReducer,
  selectedRecipe: selectedRecipeReducer,
};

export default configureStore({
  reducer: rootReducer,
});
