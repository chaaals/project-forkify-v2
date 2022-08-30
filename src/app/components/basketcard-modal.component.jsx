import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faX,
} from "@fortawesome/free-solid-svg-icons";

import Ingredient from "./ingredient.component";

import { UndecoratedLink } from "./navbar.component";

const BasketModalContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  margin: 60px 0 0 0;

  transition: 300ms ease-in-out;

  /* position: relative; */
  position: absolute;
  top: 0;
  left: 0;
`;

const BasketModal = styled.div`
  width: 50%;
  animation: pop 300ms linear;

  @keyframes pop {
    0% {
      transform: scale(0.5);
    }
    50% {
      transform: scale(1.075);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const ExitModal = styled.button`
  position: absolute;
  top: 25px;
  right: 25px;

  border: none;
  cursor: pointer;

  font-size: 1.5rem;
  background-color: transparent;
  color: var(--primary-color);
`;

const BasketCardContainer = styled.div`
  position: relative;
  width: 100%;

  margin: 25px auto;
  border: 1px solid var(--primary-color);
  background-color: var(--neutral-color1);

  border-radius: 25px;
  padding: 1.75rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  transition: 200ms opacity ease-in-out;

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const BasketHeader = styled.h2`
  font-size: 1.4rem;
  font-family: "Raleway", sans-serif;

  margin: 0 0 25px 0;
  color: var(--primary-color);
`;

const BasketText = styled.p`
  /* component styles */
  a {
    display: flex;
    align-items: center;
    gap: 8px;

    font-family: "Roboto", sans-serif;
    font-size: 1rem;

    text-decoration: none;
    color: var(--secondary-color);

    transition: 300ms ease-in-out;
    &:hover {
      transform: scale(1.075);
      color: var(--primary-color);
    }
  }

  h4 {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
  }
`;

const BasketTextContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 8px 10px;
`;

const BasketCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;
  flex-direction: column;
`;

const BasketIngredientContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 300px;
  padding: 0rem 1rem;

  gap: 8px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: var(--neutral-color1);
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 25px;
    background: var(--primary-color);
  }
  &::-webkit-scrollbar-thumb:hover {
    background: var(--dark-primary);
  }
`;

const RemoveDish = styled.button`
  /* component styles*/
  font-size: 1rem;
  font-family: "Roboto", sans-serif;

  padding: 0.5em;
  width: 100%;

  color: white;
  background-color: red;

  border: none;
  border-radius: 8px;
  cursor: pointer;

  z-index: 9999;
  &:hover {
    background-color: orangered;
  }
`;

const BasketModalComponent = ({
  dishName,
  author,
  ingredients,
  source,
  onClick,
}) => {
  return (
    <BasketModalContainer>
      <BasketModal>
        <BasketCardContainer>
          <UndecoratedLink to="/basket">
            <ExitModal>
              <FontAwesomeIcon icon={faX} />
            </ExitModal>
          </UndecoratedLink>
          <BasketHeader>
            {dishName} by {author}
          </BasketHeader>
          <BasketTextContent>
            <BasketText>
              <h4>Ingredients</h4>
            </BasketText>
            <BasketText>
              <a href={source} rel="noopener noreferrer" target="_blank">
                Learn How to Cook it
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </BasketText>
          </BasketTextContent>
          <BasketCard>
            <BasketIngredientContainer>
              {ingredients.map((ingredient) => (
                <Ingredient {...ingredient} />
              ))}
            </BasketIngredientContainer>
            <RemoveDish onClick={onClick}>Remove Recipe</RemoveDish>
          </BasketCard>
        </BasketCardContainer>
      </BasketModal>
    </BasketModalContainer>
  );
};

export default BasketModalComponent;
