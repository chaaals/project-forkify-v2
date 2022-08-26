import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { queryRecipe } from "./searchedRecipes.slice";

import SearchBar from "../../components/searchbar.component";

const ForkifySearchBar = () => {
  const [query, setQuery] = useState("");
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
    </>
  );
};

export default ForkifySearchBar;
