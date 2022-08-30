import React from "react";
import { useShowModal } from "../../app/features/selected-from-basket/selectedFromBasket.hook";

import BasketModalComponent from "../../app/components/basketcard-modal.component";

const SelectedFromBasketRoute = () => {
  const { selectedDish } = useShowModal();
  return (
    <>
      <BasketModalComponent {...selectedDish.selected_dish.modal} />
    </>
  );
};

export default SelectedFromBasketRoute;
