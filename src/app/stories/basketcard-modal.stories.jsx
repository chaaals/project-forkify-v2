import BasketModalComponent from "../components/basketcard-modal.component";

export default {
  title: "Recipes/Basket Component",
  component: BasketModalComponent,
};

const Template = (args) => <BasketModalComponent {...args} />;

export const BasketModal = Template.bind({});

BasketModal.args = {
  dishName: "Instant Oat Meal",
  ingredients: Array.from({ length: 10 }, () => {
    return { quantity: 1, unit: "cup", description: "oat meal" };
  }),
  source: "google.com",
};
