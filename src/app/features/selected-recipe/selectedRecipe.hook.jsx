import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadSelectedRecipe, selectedRecipe } from "./selectedRecipe.slice";

export const useSelectRecipe = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSelectedRecipe(id));
  }, [id, dispatch]);

  return { recipe: useSelector(selectedRecipe) };
};