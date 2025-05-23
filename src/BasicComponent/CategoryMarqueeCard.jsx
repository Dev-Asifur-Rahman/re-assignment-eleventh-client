import React, { useContext } from "react";
import { Link } from "react-router";
import { Context } from "../Context/context";

const CategoryMarqueeCard = ({ image, name }) => {
  const {user} = useContext(Context)
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className=" flex justify-center items-end shrink-0 hover:scale-105 marqueeCategoryCard transition-all duration-300 ease-in-out"
    >
      <div className="card-body">
        <h2 className="card-title  w-[150px] justify-center bg-white/10 border border-white  text-[#2b2b2b] font-bold text-lg rounded-[8px] py-[1px]">
          {name}
        </h2>
        <Link to={`/allbooks/${name}`}>
          <button className="btn-hover color-5 ">See More </button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryMarqueeCard;
