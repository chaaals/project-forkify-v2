import { useSelector } from "react-redux";
import { pinnedRecipes } from "./pinnedRecipes.slice";

export const usePinnedRecipes = () => {
  const pinnedRecipe = useSelector(pinnedRecipes);
  return {
    pinnedRecipes: pinnedRecipe,
  };
};
