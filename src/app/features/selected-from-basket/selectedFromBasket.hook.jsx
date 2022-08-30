import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useDisplayIngredients } from "../ingredient-basket/ingredientBasket.hook";

import { loadSelectedModal } from "./selectedFromBasket.slice";
import { selected } from "./selectedFromBasket.slice";

export const useShowModal = () => {
  const { basket } = useDisplayIngredients();
  const { basket_id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      loadSelectedModal({
        selected_dish: basket.filter(
          ({ recipe_id }) => recipe_id === basket_id
        )[0],
      })
    );
  }, [basket_id, basket, dispatch]);

  return {
    selectedDish: useSelector(selected),
  };
};
