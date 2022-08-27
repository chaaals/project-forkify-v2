import React from "react";
import { useSelectRecipe } from "../../app/features/selected-recipe/selectedRecipe.hook";

const SelectedRecipeRoute = () => {
  const { recipe } = useSelectRecipe();
  return <p>{JSON.stringify(recipe)}</p>;
};

export default SelectedRecipeRoute;
