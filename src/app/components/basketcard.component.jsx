import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import Ingredient from "./ingredient.component";

const BasketCardContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 25px auto;

  border: 1px solid var(--primary-color);
  border-radius: 25px;
  padding: 1.75rem;

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

  color: var(--primary-color);
  background-color: #fff;

  padding: 0.25em 0.75em;
  position: absolute;
  top: -20px;
  left: 35px;
`;

const BasketText = styled.a`
  /* parent styles */
  align-self: flex-end;

  /* component styles */
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
`;

const BasketCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;
  flex-direction: column;
`;

const BasketCardComponent = ({ dishName, author, ingredients, source }) => {
  return (
    <BasketCardContainer>
      <BasketHeader>
        {dishName} by {author}
      </BasketHeader>
      <BasketCard>
        <BasketText href={source} rel="noopener noreferrer" target="_blank">
          Learn How to Cook it{" "}
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </BasketText>
        {ingredients.map((ingredient) => (
          <Ingredient {...ingredient} />
        ))}
      </BasketCard>
    </BasketCardContainer>
  );
};

export default BasketCardComponent;
