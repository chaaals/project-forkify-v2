import React from "react";
import { useSelectRecipe } from "../../app/features/selected-recipe/selectedRecipe.hook";

import RecipeCard from "../../app/components/recipe-card.component";
import Spinner from "../../app/components/spinner.component";

const SelectedRecipeRoute = () => {
  const { recipe } = useSelectRecipe();
  return recipe?.id === undefined ? <Spinner /> : <RecipeCard {...recipe} />;
};

export default SelectedRecipeRoute;
