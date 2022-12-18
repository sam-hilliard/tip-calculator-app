import './App.css';
import TipCalculator from '../TipCalculator/TipCalculator';
import logo from '../../assets/images/logo.svg';
import Attribution from '../Attribution/Attribution';

function App() {
  return (
    <div className="App">
      <img src={logo} alt="Splitter" />
      <TipCalculator />
      <Attribution />
    </div>
  );
}

export default App;
