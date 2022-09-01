import React from "react";
import styled from "styled-components";

import { ForkifyWave1 } from "../../assets/img/forkify.waves";
import { highlightImages } from "../api/features-data";

const HighlightsContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  width: 100%;
  background-color: var(--neutral-color2);
`;

const Highlights = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  flex-direction: column;
  gap: 12px;

  margin: 20px auto;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 125px;

  position: relative;
  overflow: hidden;

  margin-top: 10px;
`;

const HighlightText = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: 1.75rem;

  color: #fff;
`;

const HighlightSubText = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1.25rem;

  margin-top: 10px;
  color: #fff;
`;

const Images = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
  white-space: nowrap;

  animation: img_move 20s linear infinite;

  @keyframes img_move {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-50%, 0);
    }
  }
`;

const HighlightImg = styled.img`
  --size: 125px;
  width: var(--size);
  height: var(--size);

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  border-radius: 50%;
  margin: 0 0.5em;
`;

const HighlightAccent = styled.span`
  color: var(--primary-color);
`;

export const AssetContainer = styled.div`
  width: 100%;
  svg {
    width: 100%;
  }
`;

const FeatureHighlightsComponent = () => {
  return (
    <HighlightsContainer>
      <AssetContainer>
        <ForkifyWave1 />
      </AssetContainer>
      <Highlights>
        <TextContainer>
          <HighlightText>
            Search over 1 million recipes with{" "}
            <HighlightAccent>Forkify</HighlightAccent>
          </HighlightText>
          <HighlightSubText>
            From <HighlightAccent>savory foods</HighlightAccent> to{" "}
            <HighlightAccent>delightful desserts</HighlightAccent>
          </HighlightSubText>
        </TextContainer>
        <ImageContainer>
          <Images>
            {highlightImages.map(({ image_url }) => (
              <HighlightImage src={image_url} />
            ))}
          </Images>
        </ImageContainer>

        <TextContainer>
          <HighlightSubText>
            Whatever you want<HighlightAccent> Forkify </HighlightAccent>has{" "}
            <HighlightAccent>Got 'Em</HighlightAccent>
          </HighlightSubText>
        </TextContainer>
      </Highlights>
    </HighlightsContainer>
  );
};

const HighlightImage = ({ src }) => {
  return <HighlightImg src={src} />;
};
export default FeatureHighlightsComponent;
