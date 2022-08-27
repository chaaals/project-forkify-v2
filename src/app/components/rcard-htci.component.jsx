import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const HowToContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border: 1px solid var(--primary-color);
  width: 100%;
  height: 150px;
  gap: 16px;

  border-radius: 4px;
  margin-top: 30px;
  padding: 1rem;
  position: relative;
`;

const HowToText = styled.h4`
  font-family: "Raleway", sans-serif;
  font-size: 1rem;
  padding: 0em 1.2em;

  color: var(--primary-color);

  position: absolute;
  background-color: #fff;
  top: -8px;
`;

const HowToContent = styled.p`
  font-size: 0.8rem;
  font-family: "Roboto", sans-serif;
  text-align: center;
`;

const HowToDirections = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  padding: 0.5em 1.25em;

  border: none;
  border-radius: 20px;

  background-color: var(--secondary-color);
  color: #fff;

  cursor: pointer;

  &:hover {
    background-color: var(--neutral-color2);
  }
`;

const DirectionsLink = styled.a`
  text-decoration: none;
`;

const HowToComponent = ({ source, author }) => {
  return (
    <HowToContainer>
      <HowToText>How To Cook It</HowToText>
      <HowToContent>
        This recipe was carefully designed and tested by{" "}
        <strong>{author ? author : "Some Author"}</strong>. Please check out
        directions at their website
      </HowToContent>
      <DirectionsLink href={source} rel="noopener noreferrer" target="_blank">
        <HowToDirections>
          Directions <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </HowToDirections>
      </DirectionsLink>
    </HowToContainer>
  );
};

export default HowToComponent;
