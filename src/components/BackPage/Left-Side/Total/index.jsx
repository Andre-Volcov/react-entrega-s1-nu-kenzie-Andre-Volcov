import "./style.css";

function Total({ listTransactions }) {
  const totalValue = listTransactions.reduce(
    (a, b) => (b.type === "entrada" ? a + b.value : a - b.value),
    0
  );

  return (
    <div className="total">
      <h3 className="valor-total-h3">
        Valor total:
        <span className="valor-total-span">$ {totalValue.toFixed(2)}</span>
      </h3>
      <p className="valor-referencia">O valor se refere ao saldo</p>
    </div>
  );
}

export default Total;
