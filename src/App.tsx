import React from 'react';
import './App.css';
import { Database } from './services/database';
import Routes from './routes';

function App() {

  Database.init();

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
