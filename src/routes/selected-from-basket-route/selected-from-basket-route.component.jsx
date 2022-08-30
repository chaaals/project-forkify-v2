import React from "react";
// import { useDispatch } from "react-redux";
import { useShowModal } from "../../app/features/selected-from-basket/selectedFromBasket.hook";

import BasketModalComponent from "../../app/components/basketcard-modal.component";

const SelectedFromBasketRoute = () => {
  const { selectedDish } = useShowModal();
  // const dispatch = useDispatch();
  return (
    <>
      <BasketModalComponent {...selectedDish.selected_dish.modal} />
    </>
  );
};

export default SelectedFromBasketRoute;
