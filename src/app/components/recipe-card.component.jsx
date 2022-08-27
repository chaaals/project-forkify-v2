import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import HowToComponent from "./rcard-htci.component";

import { decimalToFraction } from "../../math-fns/decimalToFraction";

const RecipeCardContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

const Recipe = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 300px 450px 1fr;
  gap: 20px;

  width: 1080px;
  margin: 30px 0;

  border: 1px solid var(--primary-color);
  border-radius: 4px;
  padding: 1rem;
`;

const RecipeImg = styled.img`
  --size: 300px;
  width: var(--size);
  height: var(--size);

  align-self: start;
  border-radius: 50%;
`;

const RecipeSection = styled.div`
  align-self: start;
`;

const RecipeName = styled.h1`
  font-size: 2.5rem;
  font-family: "Raleway", sans-serif;
  color: var(--primary-color);
`;

const RecipeAuthor = styled.h3`
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: var(--secondary-color);
`;

const RecipeContent = styled.div`
  margin: 16px 0px;
`;

const RecipeHeaderContent = styled.h4`
  font-family: "Raleway", sans-serif;
`;

const RecipeTextContent = styled.p`
  font-family: "Roboto", sans-serif;

  display: flex;
  gap: 8px;
`;

const RecipeContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  margin: 16px 0px;
`;

const RecipeButtonContainer = styled.div`
  display: grid;
  gap: 8px;

  width: 100%;
  margin: 30px 0px;
`;

const RecipeButton = styled.button`
  font-size: 1.2rem;
  padding: 0.5em 1.25em;

  background-color: ${(props) =>
    props.typeOfButton !== "add"
      ? "var(--secondary-color)"
      : "var(--primary-color)"};
  color: #fff;

  border: none;
  border-radius: 20px;

  cursor: pointer;

  &:hover {
    background-color: var(--neutral-color2);
  }
`;

const RecipeCard = ({ id, title, author, ingredients, source, image_url }) => {
  return (
    <RecipeCardContainer>
      <Recipe>
        <RecipeImg src={image_url} />
        <RecipeSection>
          <RecipeName>{title}</RecipeName>
          <RecipeAuthor>{author ? author : "Some Author"}</RecipeAuthor>
          <RecipeContent>
            <RecipeHeaderContent>Ingredients</RecipeHeaderContent>
            <RecipeContentGrid>
              {ingredients.map(({ quantity, unit, description }) => (
                <RecipeTextContent>
                  <FontAwesomeIcon icon={faCheck} />
                  {decimalToFraction(quantity)} {unit} {description}
                </RecipeTextContent>
              ))}
            </RecipeContentGrid>
          </RecipeContent>
        </RecipeSection>
        <RecipeSection>
          <HowToComponent source={source} author={author} />
          <RecipeButtonContainer>
            <RecipeButton typeOfButton="add">Add to Basket</RecipeButton>
            <RecipeButton typeOfButton="pin">Pin Recipe</RecipeButton>
          </RecipeButtonContainer>
        </RecipeSection>
      </Recipe>
    </RecipeCardContainer>
  );
};

export default RecipeCard;
