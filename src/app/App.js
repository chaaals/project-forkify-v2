import React from "react";

import { Routes, Route } from "react-router-dom";

import ForkifyNavBar from "./components/navbar.component";
import Home from "../routes/home-route/home-placeholder.component";
import SearchRoute from "../routes/search-route/search-route.component";
import SelectedRecipeRoute from "../routes/selected-recipe-route/selected-recipe-route.component";

import Basket from "../routes/basket-route/basket-route.component";
// import SelectedFromBasketRoute from "../routes/selected-from-basket-route/selected-from-basket-route.component";

function App() {
  return (
    <>
      <ForkifyNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search">
          <Route index element={<SearchRoute />} />
          <Route path=":id" element={<SelectedRecipeRoute />} />
        </Route>
        <Route path="/basket">
          <Route index element={<Basket />} />
          <Route path=":basket_id" element={<Basket />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
