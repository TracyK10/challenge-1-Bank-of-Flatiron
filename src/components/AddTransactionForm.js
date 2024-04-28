import React from "react";
import { useState } from "react";

function AddTransactionForm() {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  })

  function handleTransactions(e) {
    const {name, value} = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  function handleSubmit(e){
    e.preventDefault()

    fetch("http://localhost:8001/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  }).then((res) => res.json()).then((data) => {
    setFormData({
      date: "",
      description: "",
      category: "",
      amount: "",
    })
  }).catch((error) => console.error("Error:", error))
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input
          type="date" 
          name="date" 
          value={formData.date} 
          onChange={handleTransactions}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleTransactions}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleTransactions}
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
            value={formData.amount}
            onChange={handleTransactions}
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
