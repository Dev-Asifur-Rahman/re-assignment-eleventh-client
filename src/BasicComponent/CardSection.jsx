import React, { useEffect, useState } from "react";
import DataCard from "./DataCard";

const CardSection = ({ allBook, setdataView, availableBook }) => {
  const [Books, setBook] = useState([]);
  useEffect(() => {
    setBook(allBook);
  }, [allBook]);
  return (
    <section className="w-full pb-3">
      <section className="w-full py-4 flex flex-col gap-3">
        <p className="text-2xl font-bold md:text-3xl lg:text-4xl text-center ">
          Books
        </p>
        <div className="w-full flex flex-col lg:items-start lg:px-16 md:items-start lg:gap-3 md:gap-3 md:px-16">
          <p
            onClick={availableBook}
            className="text-xl font-bold text-blue-500 hover:underline text-center  hover:cursor-pointer"
          >
            See available Books
          </p>
          <p
            onClick={() => setdataView("table")}
            className="text-xl cursor-pointer font-semibold hover:underline text-center "
          >
            Table View
          </p>
        </div>
      </section>

      <section className="w-full grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center py-8 gap-y-4">
        {Books.map((book) => (
          <DataCard key={book._id} book={book}></DataCard>
        ))}
      </section>
    </section>
  );
};

export default CardSection;
