import React from "react";

function Transaction({ transactions }) {
  // Display each transaction in a table row
  return (
    <tr>
      <td>{transactions.date}</td>
      <td>{transactions.description}</td>
      <td>{transactions.category}</td>
      <td>{transactions.amount}</td>
    </tr>
  );
}

export default Transaction;
