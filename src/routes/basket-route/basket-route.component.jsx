import React from "react";
import { useSelectRecipe } from "../../app/features/selected-recipe/selectedRecipe.hook";
import { useDisplayIngredients } from "../../app/features/ingredient-basket/ingredientBasket.hook";

import BreadCrumb from "../../app/components/bread-crumb.component";
import BasketComponent from "./basket.component";

const Basket = () => {
  const { basket } = useDisplayIngredients();
  const { recipe } = useSelectRecipe();

  console.log(basket);
  return (
    <>
      <BreadCrumb
        path={recipe?.id === undefined ? `/search` : `/search/${recipe.id}`}
      />
      <BasketComponent basket={basket} />
    </>
  );
};

export default Basket;
