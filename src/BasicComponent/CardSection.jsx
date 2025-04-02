import React, { useEffect, useState } from "react";
import DataCard from "./DataCard";

const CardSection = ({ allBook,setdataView }) => {
  const [Books, setBook] = useState([]);
  useEffect(() => {
    setBook(allBook);
  }, [allBook]);
  return (
    <section className="w-full component-bg py-3">
      <p className="text-2xl font-bold md:text-3xl lg:text-4xl text-center my-3">Books</p>
      <p onClick={()=>setdataView('table')} className="text-xl cursor-pointer font-semibold hover:underline text-center my-2">Table View</p>
      <section className="w-full grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-y-4">
        {Books.map((book) => (
          <DataCard key={book._id} book={book}></DataCard>
        ))}
      </section>
    </section>
  );
};

export default CardSection;
