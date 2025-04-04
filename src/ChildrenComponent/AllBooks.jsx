import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import CardSection from "../BasicComponent/CardSection";
import TableSection from "../BasicComponent/TableSection";

const AllBooks = () => {
  const allBooks = useLoaderData();
  const [dataView, setDataView] = useState("card");
  const [Book, setBook] = useState([]);
  const [originalBook, setOriginalBook] = useState([]);

  useEffect(() => {
    if (allBooks?.data?.data?.length > 0) {
      setBook(allBooks.data.data);
      setOriginalBook(allBooks.data.data);
    }
  }, [allBooks]);

  // available book function
  function availableBook() {
    const availableBooks = originalBook.filter((book) => book.quantity > 0);
    setBook(availableBooks);
  }
  return (
    <section className="w-full">
      {Book.length === 0 ? (
        <p>No Data Found</p>
      ) : dataView === "card" ? (
        <CardSection
          setdataView={setDataView}
          availableBook={availableBook}
          allBook={Book}
        ></CardSection>
      ) : (
        <TableSection
          setdataView={setDataView}
          availableBook={availableBook}
          allBook={Book}
        ></TableSection>
      )}
    </section>
  );
};

export default AllBooks;
