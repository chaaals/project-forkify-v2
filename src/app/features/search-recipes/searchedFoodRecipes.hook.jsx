import { useSelector } from "react-redux";
import { searchRecipes } from "./searchedRecipes.slice";

export const useFoodSearch = () => {
  const searchedRecipes = useSelector(searchRecipes);
  return {
    searchedRecipes,
  };
};
