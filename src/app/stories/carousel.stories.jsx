import Carousel from "../components/carousel.component";

export default {
  title: "Misc/Carousel",
  component: Carousel,
};

const Template = (args) => <Carousel {...args} />;
export const CarouselComponent = Template.bind({});

CarouselComponent.args = {
  slides: ["hi"],
};
