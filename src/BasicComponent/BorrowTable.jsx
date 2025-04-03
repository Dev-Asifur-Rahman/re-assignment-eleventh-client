import React from "react";
import { ApiInstance } from "../Context/apiInstance";
import { lottieError, lottieSuccess } from "../lottie/lottie";

const BorrowTable = ({ book, index }) => {
  const { name, category, borrowed, _id, book_id, expire, image  } = book;

  const returnBook = () => {
    ApiInstance.delete("/return", {
      data: { _id, book_id },
    }).then(response=>{
      if(response.data.acknowledged === true){
        lottieSuccess('Book Returned')
        setTimeout(() => {
          window.location.reload();
        }, 700)
      }
    }).catch(error=>{
      lottieError('Error Occured! Try Again')
    })
  };
  return (
    <tr>
      <th>{index}</th>
      <td>
        <img className="h-[60px] w-[95px] rounded-lg" src={image} alt="" />
      </td>
      <td>{name}</td>
      <td>{category}</td>
      <td>{borrowed}</td>
      <td>{expire}</td>
      <td onClick={returnBook} className="hover:underline ">
        return
      </td>
    </tr>
  );
};

export default BorrowTable;
