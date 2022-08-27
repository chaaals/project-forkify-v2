import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin: 30px 0;
`;

const SpinnerContainer = styled.div`
  --size: 50px;
  width: var(--size);
  height: var(--size);

  color: var(--primary-color);

  svg {
    width: 100%;
    height: auto;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = () => {
  return (
    <LoadingContainer>
      <SpinnerContainer>
        <FontAwesomeIcon icon={faSpinner} />
      </SpinnerContainer>
    </LoadingContainer>
  );
};

export default Spinner;
