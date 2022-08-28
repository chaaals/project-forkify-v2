import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBarContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin-top: 25px;

  animation: fadein 2s;
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const SearchContainer = styled.div`
  width: 50%;
  position: relative;
  overflow: hidden;

  border-radius: 100px;
`;

const Search = styled.form`
  display: flex;
  width: 100%;

  &:focus-within {
    input {
      outline: none;
      border: 1px solid var(--secondary-color);
    }
    button {
      background-color: var(--secondary-color);
    }
  }
`;

const InputSearch = styled.input`
  width: 100%;
  font-size: 1rem;
  padding: 0.5em 1em;

  border-radius: 100px;
  border: 1px solid var(--primary-color);

  transition: 300ms ease-in-out;
`;

const SubmitSearch = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  font-size: 1rem;
  padding: 0.6em 1em;

  color: #fff;
  background-color: var(--primary-color);

  cursor: pointer;
  border: none;

  transition: 300ms ease-in-out;
`;

const SearchBar = ({ onSubmit, onChange, onClick, value }) => {
  return (
    <SearchBarContainer>
      <SearchContainer>
        <Search onSubmit={onSubmit}>
          <InputSearch
            name="query"
            type="text"
            placeholder="search here..."
            onChange={onChange}
            value={value}
          />
          <SubmitSearch type="submit" onClick={onClick}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </SubmitSearch>
        </Search>
      </SearchContainer>
    </SearchBarContainer>
  );
};

export default SearchBar;
