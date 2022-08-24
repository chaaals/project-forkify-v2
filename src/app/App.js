import React from "react";
import ForkifySearchBar from "../app/features/search-recipes/searchedFoodRecipes.component";
import ForkifyNavBar from "./components/navbar.component";

function App() {
  return (
    <>
      <ForkifyNavBar />
      <h1>Forkify Project</h1>
      <ForkifySearchBar />
    </>
  );
}

export default App;
