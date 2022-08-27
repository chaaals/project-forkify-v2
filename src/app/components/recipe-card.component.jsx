import React from "react";
import styled from "styled-components";

import HowToComponent from "./rcard-htci.component";

const RecipeCardContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  background-color: var(--neutral-color1);
`;

const Recipe = styled.div`
  display: grid;
  grid-template-columns: 300px repeat(2, 1fr);
  gap: 12px;

  width: 85%;

  border: 1px solid var(--primary-color);
  border-radius: 4px;
  padding: 1rem;
`;

const RecipeImg = styled.img`
  --size: 300px;
  width: var(--size);
  height: var(--size);

  background-color: black;
`;

const RecipeSection = styled.div``;

const RecipeName = styled.h1`
  font-size: 1.75rem;
  font-family: "Raleway", sans-serif;
`;

const RecipeAuthor = styled.h3`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
`;

const RecipeContent = styled.div`
  margin: 16px 0px;
`;

const RecipeHeaderContent = styled.h4`
  font-family: "Raleway", sans-serif;
`;

const RecipeTextContent = styled.p`
  font-family: "Roboto", sans-serif;
`;

const RecipeContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;

  margin: 8px 0px;
`;

const RecipeButtonContainer = styled.div``;

const RecipeButton = styled.button``;

const RecipeCard = ({ selectedRecipe }) => {
  return (
    <RecipeCardContainer>
      <Recipe>
        <RecipeImg src={selectedRecipe.image_url} />

        <RecipeSection>
          <RecipeName>{selectedRecipe.title}</RecipeName>
          <RecipeAuthor>{selectedRecipe.author}</RecipeAuthor>
          <RecipeContent>
            <RecipeHeaderContent>Ingredients</RecipeHeaderContent>
            <RecipeContentGrid>
              {selectedRecipe.ingredients.map((ingredient) => (
                <RecipeTextContent>{ingredient}</RecipeTextContent>
              ))}
            </RecipeContentGrid>
          </RecipeContent>
        </RecipeSection>

        <RecipeSection>
          <HowToComponent />
          <RecipeButtonContainer>
            <RecipeButton>Add to Basket</RecipeButton>
            <RecipeButton>Pin Recipe</RecipeButton>
          </RecipeButtonContainer>
        </RecipeSection>
      </Recipe>
    </RecipeCardContainer>
  );
};

export default RecipeCard;
