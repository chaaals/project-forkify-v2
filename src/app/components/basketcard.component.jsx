import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup, faClock } from "@fortawesome/free-solid-svg-icons";

import { UndecoratedLink } from "./navbar.component";

const BasketCardContainer = styled.section`
  width: 100%;
  background-color: var(--neutral-color1);

  border-radius: 25px;
  cursor: pointer;

  transition: 300ms ease-in-out;
  &:hover {
    background-color: var(--neutral-color2);
  }
`;

const BasketCard = styled.div`
  display: flex;
  align-items: center;

  padding: 1rem;
  gap: 16px;
`;

const BasketCardImg = styled.img`
  --size: 100px;
  width: var(--size);
  height: var(--size);

  align-self: center;
  border-radius: 50%;
`;

const BasketCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const BasketHeadingContainer = styled.div`
  width: 250px;
  overflow: hidden;
`;

const BasketCardHeading = styled.h2`
  font-family: "Raleway", sans-serif;
  color: var(--primary-color);

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BasketCardSubHeading = styled.h4`
  font-family: "Raleway", sans-serif;
  color: var(--secondary-color);
`;

const BasketTextContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const BasketCardText = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 0.8rem;
  color: black;

  ${({ cta }) => (cta ? "text-decoration: underline; font-size: .75rem;" : "")}
`;

const Colorize = styled.span`
  color: var(--primary-color);
`;

const BasketCardComponent = ({
  id,
  title,
  author,
  image_url,
  servings,
  cooking_time,
  onClick,
}) => {
  return (
    <UndecoratedLink to={`/basket/${id}`} onClick={onClick}>
      <BasketCardContainer className="basket-card-container" id={id}>
        <BasketCard>
          <BasketCardImg src={image_url} />
          <BasketCardContent>
            <BasketHeadingContainer>
              <BasketCardHeading title={title}>{title}</BasketCardHeading>
              <BasketCardSubHeading>{author}</BasketCardSubHeading>
            </BasketHeadingContainer>
            <BasketTextContainer>
              <BasketCardText>
                <Colorize>
                  <FontAwesomeIcon icon={faUserGroup} />
                </Colorize>{" "}
                {servings} Servings
              </BasketCardText>
              <BasketCardText>
                <Colorize>
                  <FontAwesomeIcon icon={faClock} />
                </Colorize>{" "}
                {cooking_time} Minutes
              </BasketCardText>
            </BasketTextContainer>
            <BasketCardText cta={true}>
              Click to view ingredients
            </BasketCardText>
          </BasketCardContent>
        </BasketCard>
      </BasketCardContainer>
    </UndecoratedLink>
  );
};

export default BasketCardComponent;
