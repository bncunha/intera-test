import React from 'react';
import './App.css';
import Api from './services/api';
import Routes from './routes';

function App() {

  Api.init();

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
