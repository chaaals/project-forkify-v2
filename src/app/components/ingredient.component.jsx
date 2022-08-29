import React from "react";
import styled from "styled-components";

import { decimalToFraction } from "../../math-fns/decimalToFraction";

const IngredientContainer = styled.div`
  width: 100%;
  border: 1px solid var(--primary-color);
  border-radius: 15px;

  padding: 0.5rem;
`;

const Ing = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);

  gap: 16px;
`;

const IngContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  overflow: hidden;
`;

const IngText = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1rem;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ hover }) => (hover === true ? "cursor: pointer" : "")};
`;

const Ingredient = ({ quantity, unit, description }) => {
  return (
    <IngredientContainer>
      <Ing>
        <IngContentContainer>
          <IngText>{quantity ? decimalToFraction(quantity) : "x"}</IngText>
        </IngContentContainer>

        <IngContentContainer>
          <IngText>{unit ? unit : "x"}</IngText>
        </IngContentContainer>

        <IngContentContainer>
          <IngText title={description} hover={true}>
            {description}
          </IngText>
        </IngContentContainer>
      </Ing>
    </IngredientContainer>
  );
};

export default Ingredient;
