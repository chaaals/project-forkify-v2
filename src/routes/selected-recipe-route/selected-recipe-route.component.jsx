import React from "react";
import { useSelectRecipe } from "../../app/features/selected-recipe/selectedRecipe.hook";
import { useDispatch } from "react-redux/es/exports";

import { addToBasket } from "../../app/features/ingredient-basket/ingredientBasket.slice";
import { pinRecipe } from "../../app/features/pin-recipes/pinnedRecipes.slice";
import { clearSelectedRecipe } from "../../app/features/selected-recipe/selectedRecipe.slice";

import RecipeCard from "../../app/components/recipe-card.component";
import Spinner from "../../app/components/spinner.component";
import BreadCrumb from "../../app/components/bread-crumb.component";

const SelectedRecipeRoute = () => {
  const { recipe } = useSelectRecipe();
  const dispatch = useDispatch();

  const addRecipeToBasket = (
    e,
    {
      id,
      title,
      publisher,
      ingredients,
      source_url,
      servings,
      cooking_time,
      image_url,
    }
  ) => {
    e.preventDefault();
    dispatch(
      addToBasket({
        recipe_id: id,
        modal: {
          dishName: title,
          author: publisher,
          ingredients,
          source: source_url,
        },
        card: { title, author: publisher, servings, cooking_time, image_url },
      })
    );
  };

  const pinRecipeToBasket = (e, { title, image_url }) => {
    e.preventDefault();
    dispatch(pinRecipe({ title, image_url }));
    console.log("i was pressed");
  };

  const backToSearchEvent = () => {
    dispatch(clearSelectedRecipe());
  };

  return (
    <>
      <BreadCrumb path="/search" onClick={backToSearchEvent} />
      {recipe?.id === undefined ? (
        <Spinner />
      ) : (
        <RecipeCard
          {...recipe}
          addToBasket={addRecipeToBasket}
          pinRecipe={pinRecipeToBasket}
        />
      )}
    </>
  );
};

export default SelectedRecipeRoute;
