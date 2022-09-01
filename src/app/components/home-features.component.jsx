import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { featuresData } from "../api/features-data";

const FeaturesComponentContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 75px auto;
  width: 100%;
`;

const Features = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 80px;

  margin: 40px auto;
  width: 75%;
`;

const FeaturesHeading = styled.h1`
  font-family: "Roboto", sans-serif;
  color: var(--primary-color);
`;

const FeaturesSubHeading = styled.h2`
  font-family: "Roboto", sans-serif;
  color: var(--primary-color);

  text-decoration: underline;
`;

const FeaturesCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 250px;
`;

const FeaturesCardHeading = styled.h2`
  display: flex;
  align-items: center;
  gap: 8px;

  font-family: "Roboto", sans-serif;
  font-size: 1.25rem;
  text-align: center;

  color: var(--primary-color);
`;

const FeaturesCardDescription = styled.p`
  font-family: "Roboto", sans-serif;
  text-align: center;

  margin: 10px 0 0 0;
  color: var(--primary-color);
`;

export const FeaturesAccent = styled.span`
  color: var(--secondary-color);
`;

const FeaturesComponent = () => {
  return (
    <FeaturesComponentContainer>
      <FeaturesHeading>
        Simplify your search for a recipe with{" "}
        <FeaturesAccent>Forkify!</FeaturesAccent>
      </FeaturesHeading>
      <Features>
        {featuresData.map((features) => (
          <FeaturesCard {...features} />
        ))}
      </Features>
      <FeaturesSubHeading>
        It's that <FeaturesAccent>simple</FeaturesAccent>!
      </FeaturesSubHeading>
    </FeaturesComponentContainer>
  );
};

const FeaturesCard = ({ title, description, icon }) => {
  return (
    <FeaturesCardContainer>
      <FeaturesCardHeading>
        <FeaturesAccent>
          <FontAwesomeIcon icon={icon} />
        </FeaturesAccent>
        {title}
      </FeaturesCardHeading>
      <FeaturesCardDescription>{description}</FeaturesCardDescription>
    </FeaturesCardContainer>
  );
};

export default FeaturesComponent;
