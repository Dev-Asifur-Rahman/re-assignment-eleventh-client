import { Rating, Star } from "@smastrom/react-rating";
import React from "react";
import { Link } from "react-router";
import "@smastrom/react-rating/style.css";

const DataCard = ({ book }) => {
  const { _id, image, name, quantity, author_name, category, rating } = book;
  const myStyles = {
    itemShapes: Star,
    activeFillColor: "#ffb700",
    inactiveFillColor: "#fbf1a9",
  };
  return (
    <div className="card hover:scale-[1.05] transition-transform duration-500 bg-base-100 w-[272px]  shadow-lg">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Books"
          className="rounded-xl h-[115px] w-[190px]"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="font-extrabold text-2xl">{name}</h2>
        <p className="text-lg font-semibold">Category : {category}</p>
        <p className="font-semibold">quantity : {quantity}</p>
        <p className="font-semibold">Author : {author_name}</p>
        <p className="font-semibold">
          {" "}
          {
            <Rating
              style={{ maxWidth: 100 }}
              value={rating}
              itemStyles={myStyles}
              readOnly
            />
          }
        </p>
        <div className=" w-full flex justify-around items-center">
          <Link to={`/bookDetails/${_id}`}>
            <button className="btn btn-primary rounded-3xl">Details</button>
          </Link>
          <Link>
            <button className="btn-hover color-5">Update</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DataCard;
