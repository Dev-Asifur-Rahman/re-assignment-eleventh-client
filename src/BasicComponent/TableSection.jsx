import React, { useEffect, useState } from "react";
import TableCard from "./TableCard";

const TableSection = ({ allBook,setdataView }) => {
  const [Books, setBook] = useState([]);
  useEffect(() => {
    setBook(allBook);
  }, [allBook]);
  return (
    <section className="component-bg">
      <div className="overflow-x-auto">
        <p className="text-2xl font-bold md:text-3xl lg:text-4xl text-center my-3">
          Books
        </p>
        <p onClick={()=>setdataView('card')} className="text-xl font-semibold hover:underline text-center cursor-pointer my-2">Card View</p>
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
