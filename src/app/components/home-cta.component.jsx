import React from "react";
import styled from "styled-components";

import { ForkifyWave2 } from "../../assets/img/forkify.waves";
import { AssetContainer } from "./home-feature-highlights.component";

const CTAContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
`;

const CallToAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 45px auto;
`;

const CallToActionText = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: 2rem;
  color: var(--primary-color);
`;

const CallToActionSubText = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1.25rem;
  color: var(--primary-color);
`;

const CallToActionBtn = styled.button`
  font-size: 1.2rem;
  font-family: "Roboto", sans-serif;
  padding: 0.5em 1.2em;

  color: #fff;
  background-color: var(--secondary-color);

  border: none;
  border-radius: 25px;

  cursor: pointer;
  margin-top: 20px;

  transition: 300ms ease-in-out;
  &:hover {
    transform: translateY(-5px);
    background-color: var(--neutral-color2);
  }
`;

const CTAAccent = styled.span`
  color: var(--secondary-color);
`;

const CallToActionComponent = ({ onClick }) => {
  return (
    <CTAContainer>
      <AssetContainer>
        <ForkifyWave2 />
      </AssetContainer>
      <CallToAction>
        <CallToActionText>What are you waiting for?</CallToActionText>
        <CallToActionSubText>
          Start <CTAAccent>searching</CTAAccent> so you can Start{" "}
          <CTAAccent>cooking</CTAAccent>!
        </CallToActionSubText>
        <CallToActionBtn onClick={onClick}>CLICK ME</CallToActionBtn>
      </CallToAction>
    </CTAContainer>
  );
};

export default CallToActionComponent;
