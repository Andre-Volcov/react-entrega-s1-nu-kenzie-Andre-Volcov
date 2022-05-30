import { useState } from "react";
import Header from "./Header";
import Left from "./Left-Side";
import Right from "./Right-side";
import "./style.css";

function BackPage({ setIsLogged, listTransactions, setListTransactions }) {
  const [transactionDisplay, setTransactionDisplay] =
    useState(listTransactions);

  const [currentFilter, setCurrentFilter] = useState("todos");

  return (
    <div>
      <Header setIsLogged={setIsLogged} />
      <div className="general">
        <Left
          transactionDisplay={transactionDisplay}
          setTransactionDisplay={setTransactionDisplay}
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
          currentFilter={currentFilter}
        />
        <Right
          transactionDisplay={transactionDisplay}
          setTransactionDisplay={setTransactionDisplay}
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
          setCurrentFilter={setCurrentFilter}
        />
      </div>
    </div>
  );
}

export default BackPage;
