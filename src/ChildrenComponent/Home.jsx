import React, { useContext } from "react";
import { Context } from "../Context/context";
import Marquee from "../BasicComponent/Marquee";
import MarQuee from "../BasicComponent/Marquee";

const Home = () => {
  const { Auth } = useContext(Context);
  return (
    <div>
      <MarQuee></MarQuee>
    </div>
  );
};

export default Home;
