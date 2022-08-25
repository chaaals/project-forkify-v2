import React from "react";
import DishCard from "../components/dish-card.component";

export default {
  title: "Recipes/Dish Component",
  component: DishCard,
};

const Template = (args) => <DishCard {...args} />;

export const DishCardComponent = Template.bind({});

DishCardComponent.args = {
  title: "Test Titleadfasfhdfhadfha",
  author: "Mang Kanor",
  IMG_URL:
    "https://images.pexels.com/photos/13185294/pexels-photo-13185294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};
