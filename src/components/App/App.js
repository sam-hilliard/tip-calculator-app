import './App.css';
import TipCalculator from '../TipCalculator/TipCalculator';
import logo from '../../assets/images/logo.svg';
import Attribution from '../Attribution/Attribution';

function App() {
  return (
    <div className="App">
      <div className="container--centered">
        <img src={logo} alt="Splitter" />
        <TipCalculator />
      </div>
      <Attribution />
    </div>
  );
}

export default App;
