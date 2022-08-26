import React from "react";
import { useParams } from "react-router-dom";

const RecipeCard = () => {
  const { id } = useParams();
  return <h1>{id !== undefined ? id : ""}</h1>;
};

export default RecipeCard;
