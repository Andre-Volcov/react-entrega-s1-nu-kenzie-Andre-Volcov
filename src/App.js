import "./App.css";
import { useState } from "react";
import FirstPage from "./components/FirstPage";
import BackPage from "./components/BackPage";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const [listTransactions, setListTransactions] = useState([]);

  return (
    <>
      {isLogged ? (
        <BackPage
          setIsLogged={setIsLogged}
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      ) : (
        <FirstPage setIsLogged={setIsLogged} />
      )}
    </>
  );
}

export default App;
