import React from "react";
import Marquee from "react-fast-marquee";

const MarQuee = () => {
  return (
    <Marquee className="p-3"  speed={40}>
      <p className="px-5">Student must return the book within 3 Days !</p>
    </Marquee>
  );
};

export default MarQuee;
