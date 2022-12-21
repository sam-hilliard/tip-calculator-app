import './App.css';
import TipCalculator from '../TipCalculator/TipCalculator';
import logo from '../../assets/images/logo.svg';
import Attribution from '../Attribution/Attribution';
import { TipParamsContextProvider } from '../../contexts/TipParamsContext';

function App() {
  return (
    <div className="App">
      <div className="container--centered">
        <img src={logo} alt="Splitter" />
        <TipParamsContextProvider>
          <TipCalculator />
        </TipParamsContextProvider>
      </div>
      <Attribution />
    </div>
  );
}

export default App;
