import logo from "./logo.svg";
import "./App.css";
import BaiTapHamberger from "./components/ReduxHamberger/BaiTapHamberger";

function App() {
  return (
    <div className="App" style={{display: 'flex', height: '100%'}}>
      <div className="col-3">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>{new Date().toLocaleString()}</h3>
        </header>
      </div>
      <div className="col-9">
        <BaiTapHamberger></BaiTapHamberger>
      </div>
    </div>
  );
}

export default App;
