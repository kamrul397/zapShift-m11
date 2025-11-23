import React from "react";
import Banner from "../Components/Banner";
import Brands from "../Components/Brands";
import Reviews from "./../Components/Reviews";

import "leaflet/dist/leaflet.css";

const reviewsPromise = fetch("reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Brands></Brands>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
    </div>
  );
};

export default Home;
