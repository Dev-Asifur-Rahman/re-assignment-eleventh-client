import React, { useContext } from "react";
import toast from "react-hot-toast";
import { ApiInstance } from "../Context/apiInstance";
import { useLoaderData, useNavigate } from "react-router";
import { Context } from "../Context/context";

const UpdateBook = () => {
  const {user} = useContext(Context)
  const navigate = useNavigate();
  const navigateLogin = useNavigate()
  const {
    _id,
    author_name,
    category,
    image,
    name,
    quantity,
    rating,
    short_description,
  } = useLoaderData();
  const addBook = (e) => {
    e.preventDefault();
    const target = e.target;
    const image = target.image.value;
    const name = target.name.value;
    const Quantity = target.quantity.value;
    const author_name = target.author_name.value;
    const category = target.category.value;
    const Rating = target.rating.value;
    const short_description = target.short_description.value;
    if (category === "Pick a color") {
      return toast.error("Please Pick any Category");
    } else if (!Number.isInteger(Number(Quantity))) {
      return toast.error("Book Number Invalid");
    } else if (!Number.isInteger(Number(Rating)) || Rating < 1 || Rating > 5) {
      return toast.error("Rating must me 1 to 5");
    } else {
      const rating = parseInt(Rating);
      const quantity = parseInt(Quantity);
      ApiInstance.put(`/updateBook/${_id}?email=${user?.email}`, {
        image,
        name,
        quantity,
        author_name,
        category,
        rating,
        short_description,
      })
        .then((result) => {
          if (result.data.acknowledged) {
            toast.success("Data Updated Successfully");
            navigate(`/allbooks/all`);
          }
          else{
            return toast.error("Please LogIn First")
          }
        })
        .catch((error) => toast.error("Something Wrong!Try Again"));
    }
  };
  return (
    <div className="component-bg w-full flex justify-center items-center">
      <form
        className="w-fit py-12 lg:py-18 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-2 md:gap-x-4 gap-y-2 md:gap-y-4 justify-items-center "
        onSubmit={addBook}
      >
        <p className="font-bold text-2xl md:text-3xl lg:text-4xl md:col-span-2 lg:col-span-2">
          Update Book
        </p>
        <input
          defaultValue={name}
          type="text"
          name="name"
          placeholder="Enter Name"
          className="input w-[90%]"
        />
        <input
          defaultValue={image}
          type="text"
          name="image"
          placeholder="Image URL"
          className="input w-[90%]"
        />
        <input
          defaultValue={quantity}
          type="text"
          name="quantity"
          placeholder="Book Quantity"
          className="input w-[90%]"
        />
        <input
          defaultValue={author_name}
          type="text"
          name="author_name"
          placeholder="Author Name"
          className="input w-[90%]"
        />
        <select
          name="category"
          defaultValue={category}
          className="select w-[90%]"
        >
          <option disabled={true}>Select Category</option>
          <option>Novel</option>
          <option>Thriller</option>
          <option>History</option>
          <option>Drama</option>
          <option>Sci-Fi</option>
          <option>Mystery</option>
        </select>
        <input
          defaultValue={rating}
          type="text"
          name="rating"
          placeholder="Rating 1-5"
          className="input w-[90%]"
        />
        <textarea
          defaultValue={short_description}
          name="short_description"
          className="textarea  w-[90%] md:col-span-2 lg:col-span-2"
          placeholder="Short Description"
        ></textarea>
        <button className="btn-hover color-5 md:col-span-2 lg:col-span-2">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateBook;
