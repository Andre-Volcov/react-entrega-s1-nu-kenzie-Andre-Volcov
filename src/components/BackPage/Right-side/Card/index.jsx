import "./style.css";
import Trash from "./img/ButtonTrash.svg";

function Card({
  transaction,
  setListTransactions,
  listTransactions,
  setTransactionDisplay,
  transactionDisplay,
}) {
  function deleteTransaction() {
    const newList = listTransactions.filter(
      (element) => element !== transaction
    );
    const actualiseFilter = transactionDisplay.filter(
      (element) => element !== transaction
    );
    setTransactionDisplay(actualiseFilter);
    setListTransactions(newList);
  }

  return (
    <li className={`${transaction.type === "entrada" ? "verde" : "cinza"}`}>
      <div className="info">
        <div className="description">{transaction.description}</div>
        <div className="type">{transaction.type}</div>
      </div>
      <div className="value">R$ {transaction.value.toFixed(2)}</div>
      <button className="exclude">
        <img src={Trash} alt="" onClick={deleteTransaction} />
      </button>
    </li>
  );
}

export default Card;
