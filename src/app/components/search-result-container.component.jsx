import React from "react";
import styled from "styled-components";

import { useFoodSearch } from "../features/search-recipes/searchedFoodRecipes.hook";
import DishCard from "./dish-card.component";

const SearchResultContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

const SearchResult = styled.section`
  display: grid;
  grid-template-columns: 300px 1fr;

  width: 85%;
  height: 100vh;
  gap: 20px;

  border: 1px solid var(--primary-color);
  border-radius: 4px;
  padding: 0.5rem;

  margin: 25px 0px;
  overflow: hidden;
`;

const DishCardContainer = styled.div`
  overflow-y: scroll;

  /* scrollbar styling */
  /*
  &::-webkit-scrollbar-track {
    border: 1px solid #000;
    padding: 2px 0;
    background-color: #404040;
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #737272;
    border: 1px solid #000;
  }
  */
`;

const RecipeCardContainer = styled.div``;

const ForkifySearchResult = () => {
  const { searchedRecipes } = useFoodSearch();
  const dishJSX =
    searchedRecipes.length !== 0 ? (
      searchedRecipes.map((recipe) => (
        <DishCard
          id={recipe.id}
          title={recipe.title}
          author={recipe.publisher}
          IMG_URL={recipe.image_url}
        />
      ))
    ) : (
      <h4>Start Searching!</h4>
    );
  return (
    <SearchResultContainer>
      <SearchResult>
        <DishCardContainer>{dishJSX}</DishCardContainer>
        <RecipeCardContainer>
          <div>ello</div>
        </RecipeCardContainer>
      </SearchResult>
    </SearchResultContainer>
  );
};

export default ForkifySearchResult;
