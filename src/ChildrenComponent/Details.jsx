import { Rating } from "@smastrom/react-rating";
import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { ApiInstance } from "../Context/apiInstance";
import { Context } from "../Context/context";
import { lottieError, lottieSuccess } from "../lottie/lottie";
import dayjs from "dayjs";
import toast from "react-hot-toast";

const Details = () => {
  const { user, borrowedBook } = useContext(Context);
  const { email, displayName } = user;
  const [allBorrowedBook, setBook] = useState([]);

  useEffect(() => {
    setBook(borrowedBook);
  }, [borrowedBook]);

  // checkbook on database
  const checkBook = () => {
    const length = allBorrowedBook.length;
    if (length === 3) {
      toast.error("You can't borrow more than 3");
    } else {
      const newBorrowedBook = {
        email,
        book_id: _id,
        name,
        category,
        image,
        borrowed: dayjs().format("YYYY-MM-DD"),
        expire: dayjs().add(3, "days").format("YYYY-MM-DD"),
      };
      const findBook = allBorrowedBook.find((book) => book.book_id === _id);
      if (findBook) {
        toast.error("Book already added");
      } else {
        borrowBook(newBorrowedBook);
      }
    }
  };

  // post borrowed book on database
  function borrowBook(newBook) {
    ApiInstance.post("/borrow", newBook)
      .then((response) => {
        if (response?.data?.acknowledged === true) {
          lottieSuccess("Borrowed Successfully");
          setTimeout(() => {
            window.location.reload();
          }, 700);
        }
      })
      .catch((error) => {
        lottieError("Error Occured! Try Again");
      });
  }
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
          <Rating
            style={{ maxWidth: 120, paddingBottom: "8px" }}
            value={rating}
            readOnly
          />
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            disabled={quantity == 0 ? true : false}
            className={`btn-hover color-5 w-fit`}
          >
            Borrow
          </button>
        </div>

        {/* modal section  */}
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box flex flex-col gap-3">
            <p className="text-lg font-bold w-full text-center">
              {" "}
              Will Return: {dayjs().add(3, "days").format("YYYY-MM-DD")}
            </p>
            <div className="w-full flex flex-col gap-3 items-center">
              <input
                type="text"
                defaultValue={displayName}
                className="input w-[90%] md:w-[60%] lg:w-[55%]"
                readOnly
              />
              <input
                type="text"
                defaultValue={email}
                className="input w-[90%] md:w-[60%] lg:w-[55%]"
                readOnly
              />
            </div>

            <div className="modal-action">
              <form
                method="dialog"
                className="flex gap-2 justify-center w-full"
              >
                {/* if there is a button in form, it will close the modal */}
                <button onClick={checkBook} className="btn-hover color-5">
                  Confirm
                </button>
                <button className="btn-hover color-5">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Details;
