import React, { useContext } from "react";
import { Context } from "../Context/context";
import MarQuee from "../BasicComponent/Marquee";
import Slider from "../BasicComponent/Slider";
import CategoryMarquee from "../BasicComponent/CategoryMarquee";
import Heading from "../BasicComponent/Heading";
import Accordion from "../BasicComponent/Accordion";
import Statistics from "../BasicComponent/Statistics";

const Home = () => {
  const { Auth } = useContext(Context);

  return (
    <div className="component-bg">
      <MarQuee></MarQuee>
      <Heading
        head="Explore Our Digital Library"
        body="Slide through powerful quotes to spark your love for reading and
        learning"
      ></Heading>
      <Slider></Slider>
      <Heading
        head="Browse by Category"
        body="Discover books by genre and find your next favorite read in a swipe!"
      ></Heading>
      <CategoryMarquee></CategoryMarquee>
      <Heading
        head="Library Info & FAQs"
        body="Tap to explore common questions and useful library information"
      ></Heading>
      <Accordion></Accordion>
      <Heading head="Library Statistics" body="Quick overview of our library's activity and resources."></Heading>
      <Statistics></Statistics>
    </div>
  );
};

export default Home;
