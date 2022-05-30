import "./style.css";
import Card from "./Card";
import NoCard from "./img/NoCard.svg";
import { useState } from "react";

function Right({
  listTransactions,
  setListTransactions,
  transactionDisplay,
  setTransactionDisplay,
  setCurrentFilter,
}) {
  function showTodos() {
    const every = listTransactions.map((transaction) => transaction);
    return setTransactionDisplay(every);
  }

  function showEntradas() {
    const entries = listTransactions.filter(
      (transaction) => transaction.type === "entrada"
    );
    return setTransactionDisplay(entries);
  }

  function showDespesas() {
    const expenses = listTransactions.filter(
      (transaction) => transaction.type === "despesa"
    );
    return setTransactionDisplay(expenses);
  }

  function changeDisplay(event) {
    if (
      event.target.value === "todos" ||
      event.target.value === "entradas" ||
      event.target.value === "despesas"
    ) {
      for (let i = 0; i < event.currentTarget.childNodes.length; i++) {
        if (event.currentTarget.childNodes[i].value === event.target.value) {
          event.currentTarget.childNodes[i].className = "button-active";
        } else {
          event.currentTarget.childNodes[i].className = "button";
        }
      }

      if (event.target.value === "todos") {
        showTodos();
        setCurrentFilter("todos");
      } else if (event.target.value === "entradas") {
        showEntradas();
        setCurrentFilter("entradas");
      } else if (event.target.value === "despesas") {
        showDespesas();
        setCurrentFilter("despesas");
      }
    }
  }

  return (
    <div className="right-side">
      <div className="Resumo">
        <p>Resumo Financeiro</p>
        <div className="buttons" onClick={changeDisplay}>
          <button value={"todos"} className="button-active">
            Todos
          </button>
          <button value={"entradas"} className="button">
            Entradas
          </button>
          <button value={"despesas"} className="button">
            Despesas
          </button>
        </div>
      </div>
      <ul>
        {transactionDisplay.length ? (
          transactionDisplay.map((transaction, index) => (
            <Card
              transactionDisplay={transactionDisplay}
              setTransactionDisplay={setTransactionDisplay}
              listTransactions={listTransactions}
              transaction={transaction}
              setListTransactions={setListTransactions}
              key={index}
            />
          ))
        ) : (
          <>
            <li className="Vazio">Você ainda não possui nenhum lançamento</li>
            <img src={NoCard} alt="" className="imgList" />
          </>
        )}
      </ul>
    </div>
  );
}

export default Right;
