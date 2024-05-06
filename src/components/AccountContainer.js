import React, {useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  // State for storing transactions and search filter
  const [transactions, setTransactions] = useState([])
  const [searchFilter, setSearchFilter] = useState("")

  // Fetch transactions data when component mounts
  useEffect(() => {
    fetch("http://localhost:8001/transactions").then(res => res.json()).then(data => setTransactions(data))
  }, [])

  // Filter transactions based on search input
  const filteredTransaction = transactions.filter(transactions => searchFilter === "" ? transactions : transactions.description.toLowerCase().includes(searchFilter.toLowerCase()))

  // Function to handle search input changesgit init
git add -A
git commit -m 'Added my project'
git remote add origin git@github.com:sammy/my-new-project.git
git push -u -f origin main
  function handleSearch(search){
    setSearchFilter(search)
  }

  return (
    <div>
      <Search onSearch={handleSearch} />
      <AddTransactionForm />
      <TransactionsList transactions={filteredTransaction} />
    </div>
  );
}

export default AccountContainer;
