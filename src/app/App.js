import React from "react";

import { Routes, Route } from "react-router-dom";

import ForkifyNavBar from "./components/navbar.component";
import Home from "../routes/home-route/home-placeholder.component";
import SearchRoute from "../routes/search-route/search-route.component";
import Basket from "../routes/basket-route/basket-placeholder.component";

function App() {
  return (
    <>
      <ForkifyNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchRoute />}>
          <Route path="dish/:id" element={<Home />} />
        </Route>
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </>
  );
}

export default App;
