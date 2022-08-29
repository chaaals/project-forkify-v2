import React from "react";
import styled from "styled-components";

import BasketCardComponent from "../../app/components/basketcard.component";
import Carousel from "../../app/components/carousel.component";

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

const BasketContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
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
  return (
    <BasketContainer>
      {pinned.length !== 0 && (
        <BasketContent>
          <Basket>
            <BasketHeader>Pin</BasketHeader>
          </Basket>
        </BasketContent>
      )}
      <BasketContent>
        <Basket>
          <BasketHeader>Basket</BasketHeader>
        </Basket>
        {basket.length !== 0 ? (
          <BasketContentGrid>
            <Carousel
              slides={basket.map(({ content }) => (
                <BasketCardComponent {...content} />
              ))}
            />
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
  );
};

export default BasketComponent;
