import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context/context";
import BorrowTable from "../BasicComponent/BorrowTable";

const BorrowedBooks = () => {
  const { borrowedBook } = useContext(Context);
  const [BorrowedBook, setBook] = useState([]);
  useEffect(() => {
    setBook(Array.isArray(borrowedBook) ? [...borrowedBook] : []);
  }, [borrowedBook]);
  return (
    <section className="component-bg p-2 md:p-4 lg:p-5">
      <p className="text-lg md:text-2xl lg:text-3xl font-bold text-center w-full  py-3 ">
        Borrowed Books
      </p>
      {BorrowedBook.length === 0 ? (
        <p>No Book Borrowed</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>image</th>
                <th>name</th>
                <th>category</th>
                <th>Borrowed</th>
                <th>Expire</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {BorrowedBook.map((book, index) => (
                <BorrowTable
                  key={index}
                  book={book}
                  index={index + 1}
                ></BorrowTable>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default BorrowedBooks;
