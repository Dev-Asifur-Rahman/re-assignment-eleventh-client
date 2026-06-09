import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { useLocation } from 'react-router';

const MarQuee = () => {
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  return (
    <Marquee className="" speed={40}>
      <p className="px-5 text-sm">
        Student must return the book within 3 Days !
      </p>
    </Marquee>
  );
};

export default MarQuee;
