import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchRecipes, queryRecipe } from "./searchedRecipes.slice";

import SearchBar from "../../components/searchbar.component";

const ForkifySearchBar = () => {
  const [query, setQuery] = useState("");
  const searchedRecipes = useSelector(searchRecipes);
  const dispatch = useDispatch();

  const handleSubmitQuery = (e) => {
    e.preventDefault();
    dispatch(queryRecipe(query));
  };

  const handleInputQuery = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  return (
    <>
      <SearchBar
        onSubmit={handleSubmitQuery}
        onChange={handleInputQuery}
        onClick={handleSubmitQuery}
        value={query}
      />
      <div>
        <h4>RECIPE_TITLE_RESULTS:</h4>{" "}
        {searchedRecipes.length !== 0 ? (
          searchedRecipes.map((recipes) => recipes.title)
        ) : (
          <p>no recipes found. start searching!</p>
        )}
      </div>
    </>
  );
};

export default ForkifySearchBar;
