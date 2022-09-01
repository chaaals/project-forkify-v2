import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import HeroComponent from "../../app/components/home-hero.component";
import FeaturesComponent from "../../app/components/home-features.component";
import FeatureHighlightsComponent from "../../app/components/home-feature-highlights.component";
import CallToActionComponent from "../../app/components/home-cta.component";

const Home = () => {
  const navigate = useNavigate();
  const navigateToSearch = useCallback(() => navigate("/search"), [navigate]);
  return (
    <>
      <HeroComponent onClick={navigateToSearch} />
      <FeaturesComponent />
      <FeatureHighlightsComponent />
      <CallToActionComponent onClick={navigateToSearch} />
    </>
  );
};

export default Home;
