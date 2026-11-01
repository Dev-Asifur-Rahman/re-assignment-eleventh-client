import React, { useEffect, useState } from "react";
import TableCard from "./TableCard";

const TableSection = ({ allBook }) => {
  const [Books, setBook] = useState([]);
  useEffect(() => {
    setBook(allBook);
  }, [allBook]);
  return (
    <section className="">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
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
