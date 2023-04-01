import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HW';
import NameSurname from './components/NameSurname';
import IndexNumber from './components/IndexNumber';
import GroupNumber from './components/GroupNumber/GroupNumber';
import ClickCounter from './components/ClickCounter/ClickCounter';

function App() {
  return (
    <div className="App">
        <HelloWorld/>
        <NameSurname name="Szymon" surname="Szymonowicz"/>
        <IndexNumber value="67823"/>
        <GroupNumber value="INMN4_PA2"/>
        <ClickCounter/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
