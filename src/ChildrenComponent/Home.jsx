import React, { useContext } from "react";
import { Context } from "../Context/context";
import MarQuee from "../BasicComponent/Marquee";
import Slider from "../BasicComponent/Slider";
import CategoryMarquee from "../BasicComponent/CategoryMarquee";

const Home = () => {
  const { Auth } = useContext(Context);
  
  return (
    <div className="component-bg">
      <MarQuee></MarQuee>
      <Slider></Slider>
      <CategoryMarquee></CategoryMarquee>
    </div>
  );
};

export default Home;
