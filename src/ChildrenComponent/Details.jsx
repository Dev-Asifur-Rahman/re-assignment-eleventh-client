import { Rating } from "@smastrom/react-rating";
import React from "react";
import { useLoaderData, useParams } from "react-router";

const Details = () => {
  const {
    author_name,
    category,
    image,
    name,
    quantity,
    rating,
    short_description,
  } = useLoaderData();
  return (
    <div className="hero component-bg min-h-screen">
      <div className="hero-content  flex-col lg:flex-row">
        <img
          src={image}
          className="h-[280px] w-[200px] rounded-lg shadow-2xl"
        />

        <div className="lg:w-3/4 md:w-full w-full flex flex-col items-center lg:items-start md:items-center ">
          <h1 className="text-4xl font-bold w-fit text-center md:text-center lg:text-start">
            {name}
          </h1>
          <p className="py-1 w-fit text-center md:text-center lg:text-start">
            {short_description}
          </p>
          <p className="py-1 w-fit text-center md:text-center lg:text-start">
            {author_name}
          </p>
          <p className="py-1 w-fit text-center md:text-center lg:text-start">
            {category}
          </p>
          <p className="py-1 w-fit text-center md:text-center lg:text-start">
            Book Available : {quantity == 0 ? "Not Available" : quantity}
          </p>
          <Rating style={{ maxWidth: 120,
            paddingBottom: '8px'
           }} value={rating} readOnly />
          <button
            disabled={quantity == 0 ? true : false}
            className={`btn-hover color-5 w-fit`}
          >
            Borrow
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
