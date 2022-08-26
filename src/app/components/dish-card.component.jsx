import React from "react";
import styled from "styled-components";

import { UndecoratedLink } from "./navbar.component";

const DishCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  max-width: 300px;
  padding: 1rem;
  background-color: var(--neutral-color1);

  cursor: pointer;
  transition: 300ms ease-in-out;

  &:hover {
    background-color: var(--neutral-color2);
  }
`;

const DishImg = styled.img`
  --size: 60px;
  width: var(--size);
  height: var(--size);

  border-radius: 50%;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const DishContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 75%;
  overflow: hidden;
`;

const DishTitle = styled.h1`
  font-family: "Raleway", sans-serif;
  color: var(--primary-color);

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DishAuthor = styled.p`
  font-family: "Roboto", sans-serif;
  color: var(--primary-color);
`;

const DishCard = ({ id, author, title, IMG_URL }) => {
  return (
    <UndecoratedLink to={`/search/dish/${id}`}>
      <DishCardContainer id={id}>
        <DishImg src={IMG_URL} />
        <DishContent>
          <DishTitle title={title}>{title}</DishTitle>
          <DishAuthor>{author}</DishAuthor>
        </DishContent>
      </DishCardContainer>
    </UndecoratedLink>
  );
};

export default DishCard;
