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
    activeFillColor: "#ffb700",
    inactiveFillColor: "#fbf1a9",
  };
  return (
    <div className="card  hover:scale-[1.05] transition-transform duration-500 bg-base-100 w-[272px]  shadow-lg">
      <figure className="px-10 pt-4">
        <img
          src={image}
          alt="Books"
          className="rounded-xl h-[115px] w-[190px]"
        />
      </figure>
      <div className="card-body items-center text-center">
        <div className=" w-full">
          <h2 className="font-extrabold text-base whitespace-nowrap overflow-hidden truncate">
            {name}
          </h2>
        </div>
        <div className="w-full flex flex-col items-start gap-1">
          <p className="text-base">Category : {category}</p>
          <p className="">quantity : {quantity}</p>
          <p className="">Author : {author_name}</p>
          <div className="font-semibold">
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

        <div className="w-full flex justify-start gap-2 items-center">
          <Link to={`/bookDetails/${_id}?email=${user?.email}`}>
            <button className="text-base bg-[#30d787] text-white font-bold btn btn-sm">Details</button>
          </Link>
          <Link to={`/updateBook/${_id}?email=${user?.email}`}>
            <button className="text-base bg-[#2b7fff] text-white font-bold btn btn-sm">Update</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DataCard;
