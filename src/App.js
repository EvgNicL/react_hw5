import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { DivWithStore } from './components/DivWithStore/DivWithStore';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Provider store={store}>
        <DivWithStore/>
      </Provider>
    </div>
  );
}

export default App;
