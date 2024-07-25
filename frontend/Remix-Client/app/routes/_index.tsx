import type { MetaFunction } from "@remix-run/node";
import CarouselOne from "~/library/carousels/Carousel1";
import NavOne from "~/library/navs/nav1";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
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
    </>
  );
}
