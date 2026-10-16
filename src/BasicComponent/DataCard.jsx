import { Rating, Star } from "@smastrom/react-rating";
import React, { useContext } from "react";
import { Link } from "react-router";
import "@smastrom/react-rating/style.css";
import { Context } from "../Context/context";

const DataCard = ({ book }) => {
  const { user } = useContext(Context);
  const { _id, image, name, quantity, author_name, category, rating } = book;
  const myStyles = {
    itemShapes: Star,
    activeFillColor: "#30d787",
    inactiveFillColor: "#9fe3ba",
  };
  return (
    <div className="card border-library  hover:scale-[1.05] transition-transform duration-500 bg-base-100 w-[240px]  shadow-lg border rounded-xl">
      <figure className="pt-3 relative">
        <p className="px-1.5 py-[4px] absolute top-6 right-6 bg-green-800 text-xs  text-white rounded-md">
          {quantity} Copies
        </p>
        <img src={image} alt="Books" className="rounded-xl h-36 w-[212px]" />
      </figure>
      <div className="card-body items-center text-center gap-0.5  p-2">
        <div className=" w-full">
          <p className=" w-fit text-xs py-0.5 px-2 mb-1 rounded-sm bg-library/15 text-library">
            {category}
          </p>
          <h2 className="font-bold text-green-800 text-lg whitespace-nowrap overflow-hidden truncate text-start">
            {name}
          </h2>
          <p className="text-green-800 text-start">{author_name}</p>
          <div className="font-semibold mt-4">
            {" "}
            {
              <Rating
                style={{ maxWidth: 100 }}
                value={rating}
                itemStyles={myStyles}
                readOnly
              />
            }
          </div>
        </div>

        <div className="w-full flex justify-start gap-2 items-center mt-1">
          <Link to={`/bookDetails/${_id}?email=${user?.email}`}>
            <button className="text-base bg-green-800 rounded-md text-white font-medium btn btn-sm">
              Details
            </button>
          </Link>
          <Link to={`/updateBook/${_id}?email=${user?.email}`}>
            <button className="text-base border  rounded-md text-green-800 font-medium btn btn-sm">
              Update
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DataCard;
