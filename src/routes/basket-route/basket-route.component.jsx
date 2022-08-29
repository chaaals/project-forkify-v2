import React from "react";
import { useSelectRecipe } from "../../app/features/selected-recipe/selectedRecipe.hook";
import { useDisplayIngredients } from "../../app/features/ingredient-basket/ingredientBasket.hook";
import { usePinnedRecipes } from "../../app/features/pin-recipes/pinnedRecipes.hook";

import BreadCrumb from "../../app/components/bread-crumb.component";
import BasketComponent from "./basket.component";

const Basket = () => {
  const { basket } = useDisplayIngredients();
  const { recipe } = useSelectRecipe();
  const { pinnedRecipes } = usePinnedRecipes();

  console.log(basket);
  return (
    <>
      <BreadCrumb
        path={recipe?.id === undefined ? `/search` : `/search/${recipe.id}`}
      />
      <BasketComponent basket={basket} pinned={pinnedRecipes} />
    </>
  );
};

export default Basket;
