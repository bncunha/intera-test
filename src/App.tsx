import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserDetails from './pages/UserDetails';
import Api from './services/api';

function App() {

  Api.init();

  return (
    <div className="App">
      <UserDetails />
    </div>
  );
}

export default App;
