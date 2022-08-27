import React from "react";
import styled from "styled-components";

import DishCard from "../../app/components/dish-card.component";
// import RecipeCard from "../../app/components/recipe-card.component";

const SearchResultContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

const CenterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 85%;
`;

const SearchResult = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 285px);

  gap: 16px;

  margin: 25px auto;
  overflow: hidden;
`;

const ForkifySearchResult = ({ searchedRecipes }) => {
  const dishJSX = searchedRecipes.map((recipe) => (
    <DishCard
      id={recipe.id}
      title={recipe.title}
      author={recipe.publisher}
      IMG_URL={recipe.image_url}
    />
  ));
  return (
    <SearchResultContainer>
      <CenterDiv>
        <SearchResult>{dishJSX}</SearchResult>
      </CenterDiv>
    </SearchResultContainer>
  );
};

export default ForkifySearchResult;
