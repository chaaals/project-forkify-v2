import React from "react";
import RecipeCard from "../components/recipe-card.component";

export default {
  title: "Recipes/Recipe Component",
  component: RecipeCard,
};

const Template = (args) => <RecipeCard {...args} />;
export const RecipeCardComponent = Template.bind({});

RecipeCardComponent.args = {
  title: "Adobo ni Ka-Sabado",
  author: "Ka-Sabado",
  image_url:
    "https://images.pexels.com/photos/13185294/pexels-photo-13185294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ingredients: [
    {
      quantity: 1,
      unit: "",
      description: "medium head cauliflower cut into florets",
    },
    { quantity: 1, unit: "", description: "egg" },
    { quantity: 0.5, unit: "cup", description: "mozzarella shredded" },
    {
      quantity: 1,
      unit: "tsp",
      description: "oregano or italian seasoning blend",
    },
    { quantity: null, unit: "", description: "Salt and pepper to taste" },
    { quantity: 1, unit: "cup", description: "chicken cooked and shredded" },
    { quantity: 0.5, unit: "cup", description: "barbecue sauce" },
    { quantity: 0.75, unit: "cup", description: "mozzarella shredded" },
    {
      quantity: null,
      unit: "",
      description: "Red onion to taste thinly sliced",
    },
    { quantity: null, unit: "", description: "Fresh cilantro to taste" },
  ],
  source:
    "http://www.closetcooking.com/2013/02/cauliflower-pizza-crust-with-bbq.html",
};
