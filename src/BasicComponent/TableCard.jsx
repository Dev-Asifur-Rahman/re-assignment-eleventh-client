import React from "react";

const TableCard = ({ book, index }) => {
  const { name, author_name, category,quantity, rating } = book;
  return (
    <tr>
      <th>{index}</th>
      <td className="">{name}</td>
      <td>{author_name}</td>
      <td>{category}</td>
      <td>{quantity}</td>
      <td>{rating}</td>
    </tr>
  );
};

export default TableCard;
