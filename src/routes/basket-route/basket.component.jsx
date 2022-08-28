import React from "react";
import styled from "styled-components";

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

const BasketComponent = ({ basket }) => {
  return (
    <BasketContainer>
      <BasketContent>
        <Basket>
          <BasketHeader>Pin</BasketHeader>
        </Basket>
      </BasketContent>
      <BasketContent>
        <Basket>
          <BasketHeader>Basket</BasketHeader>
        </Basket>
        <p>
          <strong>Basket: </strong>
          {JSON.stringify(basket)}
        </p>
      </BasketContent>
    </BasketContainer>
  );
};

export default BasketComponent;
