import "./style.css";

function FirstPage({ setIsLogged }) {
  return (
    <div className="firstPage">
      <div className="firstPage Box">
        <div className="Kenzie-div">
          <h2 className="Kenzie h2">
            <span className="nu">Nu</span>Kenzie
          </h2>
          <h1 className="Kenzie h1">Centralize o controle das suas finanças</h1>
          <p className="Kenzie p">de forma rápida e segura</p>
          <button onClick={() => setIsLogged(true)} className="iniciar-Button">
            Iniciar
          </button>
        </div>

        <div className="big-Ball">
          <div className="medium-Ball">
            <div className="small-Ball">
              <div className="big-Rectangle">
                <div className="mini-Red-Ball"></div>
                <div className="mini-Green-Ball"></div>
                <div className="mini-Black-Ball"></div>
              </div>
              <div className="green-Rectangle">
                <div className="mini-Red-Rectangle">
                  <div className="mini-Red-Rectangle-Details1">
                    <div className="mini-Red-Rectangle-Details2"></div>
                  </div>
                </div>
              </div>
              <div className="red-Rectangle">
                <div className="mini-Green-Rectangle">
                  <div className="mini-Green-Rectangle-Details1">
                    <div className="mini-Green-Rectangle-Details2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
