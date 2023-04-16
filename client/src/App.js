import logo from './logo.svg';
import './App.css';
import Username from './components/Username';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Username/>
      </header>
    </div>
  );
}

export default App;
