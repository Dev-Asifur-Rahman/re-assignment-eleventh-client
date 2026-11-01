import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import CardSection from "../BasicComponent/CardSection";
import TableSection from "../BasicComponent/TableSection";
import { CiCircleList, CiGrid41 } from "react-icons/ci";

const AllBooks = () => {
  const allBooks = useLoaderData();
  const [dataView, setDataView] = useState("card");
  const [dataViewConditional, setDataViewConditional] = useState(true);
  const [Book, setBook] = useState([]);
  const [originalBook, setOriginalBook] = useState([]);

  useEffect(() => {
    if (allBooks?.data?.data?.length > 0) {
      setBook(allBooks.data.data);
      setOriginalBook(allBooks.data.data);
    }
  }, [allBooks]);

  function availableBook() {
    const availableBooks = originalBook.filter((book) => book.quantity > 0);
    setBook(availableBooks);
  }

  return (
    <section className="w-full">
      {Book.length === 0 ? (
        <p>No Data Found</p>
      ) : (
        <section className="">
          <div className="">
            <p className="text-2xl font-bold md:text-3xl lg:text-4xl text-center text-green-800 uppercase">
              Books
            </p>
            <div className="md:py-4 py-2 flex justify-between items-center w-[90%]  mx-auto">
              <p
                onClick={availableBook}
                className="text-md md:text-xl font-bold text-blue-500 hover:underline text-center  hover:cursor-pointer"
              >
                Available Books
              </p>
              {/* switch section  */}
              <section className="border border-library text-library rounded-md flex items-center text-2xl">
                <div 
                onClick={()=>{
                  setDataView("card")
                  setDataViewConditional(true)
                }}
                  className={`
                border-r border-library py-1 px-1.5 cursor-pointer ${dataViewConditional && "bg-library/25"}`}
                >
                  <CiGrid41 className="" />
                </div>
                <div
                onClick={()=>{
                  setDataView("table")
                  setDataViewConditional(false)
                }}
                  className={`py-1 px-1.5 cursor-pointer ${!dataViewConditional && "bg-library/25"}`}
                >
                  <CiCircleList />
                </div>
              </section>
              
            </div>
          </div>
          {dataView === "card" ? (
            <CardSection
              setdataView={setDataView}
              availableBook={availableBook}
              allBook={Book}
            />
          ) : (
            <TableSection
              setdataView={setDataView}
              availableBook={availableBook}
              allBook={Book}
            />
          )}
        </section>
      )}
    </section>
  );
};

export default AllBooks;
