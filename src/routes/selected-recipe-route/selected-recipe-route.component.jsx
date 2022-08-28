import React from "react";
import { useSelectRecipe } from "../../app/features/selected-recipe/selectedRecipe.hook";
import { useDispatch } from "react-redux/es/exports";

import { addToBasket } from "../../app/features/ingredient-basket/ingredientBasket.slice";
import { clearSelectedRecipe } from "../../app/features/selected-recipe/selectedRecipe.slice";

import RecipeCard from "../../app/components/recipe-card.component";
import Spinner from "../../app/components/spinner.component";
import BreadCrumb from "../../app/components/bread-crumb.component";

const SelectedRecipeRoute = () => {
  const { recipe } = useSelectRecipe();
  const dispatch = useDispatch();

  const addRecipeToBasket = (e, { title, ingredients, source_url }) => {
    e.preventDefault();
    dispatch(
      addToBasket({
        dishName: title,
        ingredients: ingredients,
        source: source_url,
      })
    );
  };

  const backToSearchEvent = () => {
    dispatch(clearSelectedRecipe());
  };

  return (
    <>
      <BreadCrumb path="/search" onClick={backToSearchEvent} />
      {recipe?.id === undefined ? (
        <Spinner />
      ) : (
        <RecipeCard {...recipe} onClick={addRecipeToBasket} />
      )}
    </>
  );
};

export default SelectedRecipeRoute;
