import React from "react";
import RecipeCard from "../components/recipe-card.component";

export default {
  title: "Recipes/Recipe Component",
  component: RecipeCard,
};

const Template = (args) => <RecipeCard {...args} />;
export const RecipeCardComponent = Template.bind({});

RecipeCardComponent.args = {
  selectedRecipe: {
    title: "Adobo ni Ka-Sabado",
    author: "Ka-Sabado",
    image_url:
      "https://images.pexels.com/photos/13185294/pexels-photo-13185294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ingredients: [
      "ingredient1",
      "ingredient2",
      "ingredient3",
      "ingredient1",
      "ingredient2",
      "ingredient3",
    ],
  },
};
