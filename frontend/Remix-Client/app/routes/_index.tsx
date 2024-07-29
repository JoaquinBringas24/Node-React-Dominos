import { ApiProvider } from "@reduxjs/toolkit/query/react";
import type { MetaFunction } from "@remix-run/node";
import { Provider } from "react-redux";
import CarouselOne from "~/library/carousels/Carousel1";
import ItemOne from "~/library/items/Item1";
import NavOne from "~/library/navs/nav1";
import DivisionOne from "~/library/structures/Division1";
import store from "~/store/store";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Provider store={store}>
      <div className="md:m-0 w-[calc(100%-0.01rem)]">
        <NavOne logo="/dominos-logo.png" />
        <div>
          <CarouselOne
            APIurl="http://localhost:3000/api/images"
            imgSrc="source"
            imgTitle="title"
            id="id"
            advertisementLink="adlink"
          />
        </div>

        <DivisionOne text="Recommended Items" />
      </div>
      <div className="p-10 flex flex-col md:flex-row justify-center ">
        <ItemOne
          id={1}
          name="Pepperoni Pizza"
          price={200}
          key={1}
          pic="https://www.simplyrecipes.com/thmb/KE6iMblr3R2Db6oE8HdyVsFSj2A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-1024x682-583b275444104ef189d693a64df625da.jpg"
        />
        <ItemOne
          id={2}
          name="Pepperoni Pizza"
          price={100}
          key={2}
          pic="https://www.simplyrecipes.com/thmb/KE6iMblr3R2Db6oE8HdyVsFSj2A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-1024x682-583b275444104ef189d693a64df625da.jpg"
        />
        <ItemOne
          id={3}
          name="Pepperoni Pizza"
          price={60}
          key={3}
          pic="https://www.simplyrecipes.com/thmb/KE6iMblr3R2Db6oE8HdyVsFSj2A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-1024x682-583b275444104ef189d693a64df625da.jpg"
        />
        <ItemOne
          id={4}
          name="Pepperoni Pizza"
          price={500}
          key={4}
          pic="https://www.simplyrecipes.com/thmb/KE6iMblr3R2Db6oE8HdyVsFSj2A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-1024x682-583b275444104ef189d693a64df625da.jpg"
        />
        <ItemOne
          id={5}
          name="Pepperoni Pizza"
          price={100}
          key={5}
          pic="https://www.simplyrecipes.com/thmb/KE6iMblr3R2Db6oE8HdyVsFSj2A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-1024x682-583b275444104ef189d693a64df625da.jpg"
        />
      </div>
    </Provider>
  );
}
