import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchRecipes, queryRecipe } from "../features/searchedRecipes.slice";

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
      <form onSubmit={handleSubmitQuery}>
        <input
          name="query"
          type="text"
          placeholder="search here..."
          onChange={handleInputQuery}
          value={query}
        />
        <button type="submit" onClick={handleSubmitQuery}>
          QUERY SEARCH
        </button>
      </form>
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
