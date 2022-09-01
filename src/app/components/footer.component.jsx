import React from "react";
import styled from "styled-components";

import ForkifyLogo from "../../assets/img/forkify.logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const FooterContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 200px;
  background-color: var(--primary-color);

  margin-top: 100px;
`;

const Footer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  width: 75%;
`;

const FooterContentContainer = styled.div`
  /* component styles */
  display: flex;
  flex-direction: column;

  /* parent styles */
  ${({ parentStyles }) =>
    parentStyles &&
    `align-items: center; align-self: end; justify-self: end; gap: 12px;`}
`;

const FooterHeadingContent = styled.h2`
  font-family: "Raleway", sans-serif;
  color: var(--neutral-color2);
`;

const FooterTextContent = styled.p`
  display: flex;
  gap: 8px;

  opacity: 0.5;

  font-family: "Roboto", sans-serif;
  font-size: 0.75rem;
  color: #fff;
`;

const FooterTextLink = styled.a`
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  color: #fff;

  text-decoration: none;
  margin-top: 10px;
`;

const ForkifyFooter = () => {
  return (
    <FooterContainer>
      <Footer>
        <FooterContentContainer>
          <FooterHeadingContent>Socials</FooterHeadingContent>
          <FooterLink
            link="https://github.com/chaaals"
            icon={faGithub}
            name="Github"
          />

          <FooterLink
            link="https://www.linkedin.com/in/chaalschng/"
            icon={faLinkedin}
            name="LinkedIn"
          />

          <FooterLink
            link="https://twitter.com/chalsthebreaker"
            icon={faTwitter}
            name="Twitter"
          />
        </FooterContentContainer>
        <FooterContentContainer parentStyles={true}>
          <ForkifyLogo />
          <FooterTextContent>
            <FontAwesomeIcon icon={faCode} />
            Developed by Charles Ching
          </FooterTextContent>
          <FooterTextContent>
            <FontAwesomeIcon icon={faLightbulb} />
            Idea & API by Jonas Schmedtmann
          </FooterTextContent>
        </FooterContentContainer>
      </Footer>
    </FooterContainer>
  );
};

const FooterLink = ({ link, icon, name }) => {
  return (
    <FooterTextLink target="_blank" rel="noopener noreferrer" href={link}>
      <FontAwesomeIcon icon={icon} /> {name}
    </FooterTextLink>
  );
};

export default ForkifyFooter;
