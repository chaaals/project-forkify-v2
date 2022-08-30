import { configureStore } from "@reduxjs/toolkit";

// reducers
import ingredientBasketReducer from "../app/features/ingredient-basket/ingredientBasket.slice";
import pinnedRecipesReducer from "../app/features/pin-recipes/pinnedRecipes.slice";
import searchedRecipesReducer from "../app/features/search-recipes/searchedRecipes.slice";
import selectedRecipeReducer from "../app/features/selected-recipe/selectedRecipe.slice";
import selectedFromBasketReducer from "../app/features/selected-from-basket/selectedFromBasket.slice";

const rootReducer = {
  ingredientBasket: ingredientBasketReducer,
  pinnedRecipes: pinnedRecipesReducer,
  searchedRecipes: searchedRecipesReducer,
  selectedRecipe: selectedRecipeReducer,
  selectFromBasket: selectedFromBasketReducer,
};

export default configureStore({
  reducer: rootReducer,
});
