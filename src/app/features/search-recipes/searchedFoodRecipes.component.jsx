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

  // const dishesJSX =
  //   searchedRecipes.length !== 0 ? (
  //     searchedRecipes.map((recipe) => (
  //       <DishCard
  //         id={recipe.id}
  //         title={recipe.title}
  //         author={recipe.publisher}
  //         IMG_URL={recipe.image_url}
  //       />
  //     ))
  //   ) : (
  //     <h1>What are you waiting for? Start searching!</h1>
  //   );

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
