import logo from './logo.svg';
import './App.scss';
import Mycomponent from './Myconponent'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> oke nha.
        </p>

        <Mycomponent />
      </header>
    </div>

  );
}

export default App;
