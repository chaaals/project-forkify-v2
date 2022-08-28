import React from "react";

import { useFoodSearch } from "../../app/features/search-recipes/searchedFoodRecipes.hook";
import ForkifySearchBar from "../../app/features/search-recipes/searchedFoodRecipes.component";
import ForkifySearchResult from "./search-result-container.component";

const SearchRoute = () => {
  const { searchedRecipes } = useFoodSearch();
  console.log(searchedRecipes);
  return (
    <>
      <ForkifySearchBar />
      {searchedRecipes.length !== 0 && (
        <ForkifySearchResult searchedRecipes={searchedRecipes} />
      )}
    </>
  );
};

export default SearchRoute;
