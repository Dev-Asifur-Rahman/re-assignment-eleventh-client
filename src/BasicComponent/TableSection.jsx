import React, { useEffect, useState } from "react";
import TableCard from "./TableCard";

const TableSection = ({ allBook, setdataView, availableBook }) => {
  const [Books, setBook] = useState([]);
  useEffect(() => {
    setBook(allBook);
  }, [allBook]);
  return (
    <section className="component-bg">
      <section className="w-full py-4 bg-white flex flex-col gap-3">
        <p className="text-2xl font-bold md:text-3xl lg:text-4xl text-center ">
          Books
        </p>
        <p
          onClick={availableBook}
          className="text-xl font-bold text-blue-500 hover:underline text-center  hover:cursor-pointer"
        >
          See available Books
        </p>
        <p
          onClick={() => setdataView("card")}
          className="text-xl font-semibold hover:underline text-center cursor-pointer"
        >
          Card View
        </p>
      </section>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Author Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {Books.map((book, index) => (
              <TableCard key={index} index={index + 1} book={book}></TableCard>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TableSection;
