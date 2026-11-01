import React, { useEffect, useState } from "react";
import DataCard from "./DataCard";

const CardSection = ({ allBook }) => {
  const [Books, setBook] = useState([]);
  useEffect(() => {
    setBook(allBook);
  }, [allBook]);
  return (
    <section className="w-full pb-3">
      <section className="w-full grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center py-8 gap-y-4">
        {Books.map((book) => (
          <DataCard key={book._id} book={book}></DataCard>
        ))}
      </section>
    </section>
  );
};

export default CardSection;
