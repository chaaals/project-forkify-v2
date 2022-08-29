import React, { useState } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const CarouselContainer = styled.section`
  display: grid;
  grid-template-columns: 60px 1fr 60px;

  width: 1080px;
`;

const CarouselContent = styled.div`
  padding: 1rem;
`;

const CarouselButton = styled.button`
  font-size: 2rem;

  background-color: rgba(238, 238, 238, 0);
  color: var(--primary-color);

  border: none;
  cursor: pointer;

  transition: 200ms ease-in-out;

  &:hover {
    transform: scale(1.075);
  }
`;

const Carousel = ({ slides }) => {
  const MAX_SLIDES = slides.length - 1;
  const [currentSlide, setCurrentSlide] = useState(0);

  const changeToNextSlide = () => {
    if (currentSlide === MAX_SLIDES) {
      setCurrentSlide(0);
      return;
    }
    setCurrentSlide((state) => state + 1);
  };

  const changeToPrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(MAX_SLIDES);
      return;
    }
    setCurrentSlide((state) => state - 1);
  };

  return (
    <CarouselContainer>
      <CarouselButton onClick={changeToPrevSlide}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </CarouselButton>
      <CarouselContent>{slides[currentSlide]}</CarouselContent>
      <CarouselButton onClick={changeToNextSlide}>
        <FontAwesomeIcon icon={faAngleRight} />
      </CarouselButton>
    </CarouselContainer>
  );
};

export default Carousel;
