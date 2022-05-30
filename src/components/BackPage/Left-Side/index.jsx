import "./style.css";
import Total from "./Total";
import { useState } from "react";

function Left({
  listTransactions,
  setListTransactions,
  transactionDisplay,
  setTransactionDisplay,
  currentFilter,
}) {
  const [description, setDescription] = useState("");
  const [newType, setNewType] = useState("entrada");
  const [newValue, setNewValue] = useState("");

  function isNumber(str) {
    if (str.trim() === "") {
      return false;
    }
    return !isNaN(str);
  }

  function newTransaction(event) {
    event.preventDefault();
    if (isNumber(newValue)) {
      setListTransactions([
        ...listTransactions,
        {
          description: description,
          type: newType,
          value: Number(newValue),
        },
      ]);

      if (`${newType}s` === currentFilter) {
        setTransactionDisplay([
          ...transactionDisplay,
          {
            description: description,
            type: newType,
            value: Number(newValue),
          },
        ]);
      } else if (currentFilter === "todos") {
        setTransactionDisplay([
          ...transactionDisplay,
          {
            description: description,
            type: newType,
            value: Number(newValue),
          },
        ]);
      }
    }
  }

  return (
    <div className="left-side">
      <form>
        <label className="descricao">Descrição</label>
        <input
          className="descricao-input"
          placeholder="Digite aqui sua descrição"
          onChange={(event) => setDescription(event.target.value)}
        ></input>
        <p className="descricao-exemplo">Ex: Compra de roupas</p>
        <div className="valor-Tipo">
          <div className="valor">
            <label>Valor</label>
            <div className="div-valor-input">
              <input
                className="valor-input"
                type="text"
                placeholder="1"
                onChange={(event) => setNewValue(event.target.value)}
              ></input>
              <span className="span-valor-input">R$</span>
            </div>
          </div>
          <div className="tipo">
            <label className="tipo-input">Tipo de valor</label>
            <select
              onChange={(event) => setNewType(event.target.value.toLowerCase())}
            >
              <option value="Entrada">Entrada</option>
              <option value="Despesa">Despesa</option>
            </select>
          </div>
        </div>
        <button className="inserir-valor" onClick={newTransaction}>
          Inserir valor
        </button>
      </form>
      <Total listTransactions={listTransactions} />
    </div>
  );
}

export default Left;
