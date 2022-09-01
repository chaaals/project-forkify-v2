import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 500px;

  background-color: var(--neutral-color1);
  z-index: -1;
`;

const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;
  width: 60%;
`;

const HeroContentContainer = styled.div`
  ${({ justify }) =>
    justify === "start" ? `justify-self: flex-start` : `justify-self: flex-end`}
`;

const HeroHeadingText = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: 3rem;
  color: var(--primary-color);
`;

const HeroSubHeadingText = styled.h4`
  width: 80%;
  font-family: "Raleway", sans-serif;
  font-size: 1.25rem;
  font-weight: 200;
  color: var(--primary-color);
`;

const HeroTextAccent = styled.span`
  color: var(--secondary-color);
`;

const HeroCTAButton = styled.button`
  display: flex;
  gap: 8px;

  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  padding: 0.75em 1.2em;

  background-color: var(--secondary-color);
  color: #fff;

  border: none;
  border-radius: 25px;
  cursor: pointer;

  margin-top: 30px;
  transition: 300ms ease-in-out;

  &:hover {
    background-color: var(--neutral-color2);
    transform: translateY(-4px);
  }
`;

const HeroAssetContainer = styled.div`
  --size: 300px;
  width: var(--size);
  height: var(--size);

  border: 2px solid var(--primary-color);

  position: relative;
`;

const HeroAssetImg = styled.img`
  --size: 305px;
  width: var(--size);
  height: var(--size);

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  position: absolute;
  top: -20px;
  left: -20px;

  cursor: pointer;
  transition: 300ms ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const HeroComponent = ({ onClick }) => {
  return (
    <HeroContainer>
      <Hero>
        <HeroContentContainer justify="start">
          <HeroHeadingText>
            Welcome to <HeroTextAccent>Forkify</HeroTextAccent>
          </HeroHeadingText>
          <HeroSubHeadingText>
            A recipe finder that helps you plan out your shopping list!
          </HeroSubHeadingText>
          <HeroCTAButton onClick={onClick}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            START SEARCHING
          </HeroCTAButton>
        </HeroContentContainer>

        <HeroContentContainer justify="end">
          <HeroAsset src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </HeroContentContainer>
      </Hero>
    </HeroContainer>
  );
};

const HeroAsset = ({ src }) => {
  return (
    <HeroAssetContainer>
      <HeroAssetImg src={src} />
    </HeroAssetContainer>
  );
};

export default HeroComponent;
