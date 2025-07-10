import React, { useContext } from "react";
import { Link } from "react-router";
import { Context } from "../Context/context";

const CategoryMarqueeCard = ({ image, name }) => {
  const {user} = useContext(Context)
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className=" flex border-2 shadow-xl justify-center items-end shrink-0 hover:scale-105 marqueeCategoryCard transition-all duration-300 ease-in-out"
    >
      <div className=" p-5 flex flex-col justify-between w-full h-full">
        <h2 className=" w-fit py-1 px-3 bg-white/10 border font-bold text-sm rounded-[8px]">
          {name}
        </h2>
        <Link to={`/allbooks/${name}`}>
          <button className="btn btn-sm btn-outline hover:bg-[#f7f5f3] hover:text-black dark:hover:bg-white dark:hover:text-black">See More</button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryMarqueeCard;
