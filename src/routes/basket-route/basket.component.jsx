import React from "react";
import styled from "styled-components";

import BasketModalComponent from "../../app/components/basketcard-modal.component";
import BasketCardComponent from "../../app/components/basketcard.component";
import PinnedRecipeComponent from "../../app/components/pinned-recipe-card.component";

import { useShowModal } from "../../app/features/selected-from-basket/selectedFromBasket.hook";

const BasketContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
`;

const BasketContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 85%;
`;

const BasketContentFlex = styled.div`
  display: flex;
  gap: 20px;

  width: 80%;
`;
const BasketContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  width: 80%;

  gap: 16px;
`;

const Basket = styled.div`
  width: 100%;
  margin: 30px 0 15px 0;
  border-bottom: 1px solid var(--primary-color);
`;

const BasketHeader = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: 2rem;
  color: var(--primary-color);
`;

const BasketMessageContainer = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
`;

const BasketMessage = styled.h4`
  font-size: 1.25rem;
  font-family: "Raleway", sans-serif;
`;

const BasketComponent = ({ basket, pinned }) => {
  const { selectedDish, remove_recipe } = useShowModal();

  return (
    <>
      {" "}
      <BasketContainer>
        {pinned.length !== 0 && (
          <BasketContent>
            <Basket>
              <BasketHeader>Pinned Recipes</BasketHeader>
            </Basket>
            <BasketContentFlex>
              {pinned.map((recipes) => (
                <PinnedRecipeComponent {...recipes} />
              ))}
            </BasketContentFlex>
          </BasketContent>
        )}
        <BasketContent>
          <Basket>
            <BasketHeader>Basket</BasketHeader>
          </Basket>
          {basket.length !== 0 ? (
            <BasketContentGrid>
              {basket.map(({ recipe_id, card }) => (
                <BasketCardComponent id={recipe_id} {...card} />
              ))}
            </BasketContentGrid>
          ) : (
            <BasketMessageContainer>
              <BasketMessage>
                Your basket is looking dull, start searching for recipes and add
                them here!
              </BasketMessage>
            </BasketMessageContainer>
          )}
        </BasketContent>
      </BasketContainer>
      {selectedDish?.selected_dish !== undefined && (
        <BasketModalComponent
          onClick={remove_recipe}
          {...selectedDish.selected_dish.modal}
        />
      )}
    </>
  );
};

export default BasketComponent;
