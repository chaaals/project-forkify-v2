import React from "react";
import styled from "styled-components";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";

// logo
import ForkifyLogo from "../../assets/img/forkify.logo";

const Navbar = styled.header`
  display: grid;
  place-items: center;
  width: 100%;

  border-bottom: 1px solid var(--primary-color);
  padding: 0.75rem;
`;

const Nav = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 75%;
`;

const NavbarLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const NavbarOptions = styled.div`
  /* parent styles */
  justify-self: end;

  display: flex;
  align-items: center;
  gap: 16px;
`;

const NavTextLogo = styled.h2`
  color: var(--primary-color);
  font-family: "Raleway", sans-serif;
  font-size: 1.5rem;
`;

const NavTextOption = styled.button`
  display: flex;
  gap: 4px;

  font-family: "Raleway", sans-serif;
  font-size: 1rem;

  color: var(--primary-color);
  background-color: white;

  border: none;
  cursor: pointer;
`;

const ForkifyNavBar = () => {
  return (
    <Navbar>
      <Nav>
        <NavbarLogo>
          <ForkifyLogo />
          <NavTextLogo>Forkify</NavTextLogo>
        </NavbarLogo>
        <NavbarOptions>
          <NavTextOption>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            Search
          </NavTextOption>
          <NavTextOption>
            <FontAwesomeIcon icon={faShoppingBasket} />
            Basket
          </NavTextOption>
        </NavbarOptions>
      </Nav>
    </Navbar>
  );
};

export default ForkifyNavBar;
