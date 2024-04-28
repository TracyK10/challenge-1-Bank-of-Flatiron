import React from "react";
import { useState } from "react";

function AddTransactionForm() {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  function handleTransactions(date, description, category, amount) {
    const newTransaction = {
      date: date,
      description: description,
      category: category,
      amount: parseFloat(amount),
    };

    fetch("http://localhost:8001/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTransaction),
  }).then((res) => res.json()).then((data) => console.log(data));
  }

  

  function handleSubmit(e){
    e.preventDefault()
    handleTransactions(date, description, category, amount)
    // clear form fields after submission
    setDate("")
    setDescription("")
    setAmount("")
    setCategory("")
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input
          type="date" 
          name="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={category}
            onChange={e => setCategory(e.target.value)}
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button
          className="ui button"
          type="submit"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
