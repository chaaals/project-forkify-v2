import React from "react";
import { useDisplayIngredients } from "../../app/features/ingredient-basket/ingredientBasket.hook";

const Basket = () => {
  const { basket } = useDisplayIngredients();
  console.log(basket);
  return (
    <p>
      <strong>Basket:</strong> {JSON.stringify(basket)}
    </p>
  );
};

export default Basket;
