import BasketCardComponent from "../components/basketcard.component";

export default {
  title: "Recipes/Basket Component",
  component: BasketCardComponent,
};

const Template = (args) => <BasketCardComponent {...args} />;

export const BasketCard = Template.bind({});

BasketCard.args = {
  dishName: "Instant Oat Meal",
  ingredients: Array.from({ length: 10 }, () => {
    return { quantity: 1, unit: "cup", description: "oat meal" };
  }),
  source: "google.com",
};
