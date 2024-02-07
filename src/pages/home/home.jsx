import React from "react";
import { Carusel } from "../../components/carusel";

export const Home = () => {
  let slides = [
    "https://www.shutterstock.com/image-illustration/pristine-reflective-lake-show-image-260nw-2305485315.jpg",
    "https://www.shutterstock.com/image-illustration/rainbow-planet-fantasy-moons-stars-260nw-91263968.jpg",
    "https://www.shutterstock.com/image-illustration/beautiful-view-galaxie-260nw-2269996539.jpg",
    "https://www.shutterstock.com/image-illustration/pristine-reflective-lake-show-image-260nw-2305485315.jpg",
    "https://www.shutterstock.com/image-illustration/rainbow-planet-fantasy-moons-stars-260nw-91263968.jpg",
    "https://www.shutterstock.com/image-illustration/beautiful-view-galaxie-260nw-2269996539.jpg",
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="w-full mx-auto">
        <Carusel slides={slides} />
      </div>
    </div>
  );
};
