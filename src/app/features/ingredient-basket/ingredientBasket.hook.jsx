import { useSelector } from "react-redux";
import { basketIngredients } from "./ingredientBasket.slice";

export const useDisplayIngredients = () => {
  const basket = useSelector(basketIngredients);

  return {
    basket,
  };
};
