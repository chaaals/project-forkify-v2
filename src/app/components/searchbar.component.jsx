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
`;

const InputSearch = styled.input`
  width: 100%;
  font-size: 1.25rem;
  padding: 0.5em 1em;

  border-radius: 100px;
  border: 1px solid var(--primary-color);
`;

const SubmitSearch = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  font-size: 1rem;
  padding: 0.85em 1.25em;

  color: #fff;
  background-color: var(--primary-color);

  cursor: pointer;
  border: none;
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
