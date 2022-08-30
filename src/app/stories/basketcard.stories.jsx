import BasketCardComponent from "../components/basketcard.component";

export default {
  title: "Recipes/Basket Component",
  component: BasketCardComponent,
};

const Template = (args) => <BasketCardComponent {...args} />;

export const BasketCard = Template.bind({});

BasketCard.args = {
  title: "Adobo ni Ka-Sabado agsdgs",
  author: "Ka-Sabado",
  image_url:
    "https://images.pexels.com/photos/13185294/pexels-photo-13185294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  servings: 4,
  cooking_time: 60,
};
