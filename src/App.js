import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Learn React</p>
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
      </header>
    </div>
  );
}

function Test()
{
  const testStyle = {
    border : '2px solid red',
    margin: '10px',
    padding: '10px'
  }
  return (
      <div style={testStyle}>
        <h5>Hulla lla heyo !!</h5>
        <h4>Another</h4>
      </div>
  )
    
}

export default App;
