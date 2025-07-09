import React from "react";
import Marquee from "react-fast-marquee";

const MarQuee = () => {
  return (
    <Marquee className="py-1 bg-white"  speed={40}>
      <p className="px-5 font-bold">Student must return the book within 3 Days !</p>
    </Marquee>
  );
};

export default MarQuee;
