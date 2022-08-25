import React from "react";

import ForkifyNavBar from "./components/navbar.component";
import ForkifySearchBar from "../app/features/search-recipes/searchedFoodRecipes.component";
import ForkifySearchResult from "./components/search-result-container.component";

function App() {
  return (
    <>
      <ForkifyNavBar />
      <ForkifySearchBar />
      <ForkifySearchResult />
    </>
  );
}

export default App;
