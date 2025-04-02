import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import CardSection from "../BasicComponent/CardSection";
import TableSection from "../BasicComponent/TableSection";

const AllBooks = () => {
  const allBooks = useLoaderData();
  const [dataView, setdataView] = useState("table");
  const [Book, setBook] = useState([]);
  useEffect(()=>{
    if(allBooks?.data?.data?.length > 0){
      setBook(allBooks.data.data)
    }
  },[])
  if(Book.length === 0){
    return <p>No Data Found</p>
  }
  else{
    return dataView === 'card'? <CardSection setdataView={setdataView} allBook={Book}></CardSection> : <TableSection setdataView={setdataView} allBook={Book}></TableSection>
  }
};

export default AllBooks;
