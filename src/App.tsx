import React from 'react';
import './App.css';
import { Database } from './services/database';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  
  Database.init();

  return (
    <div className="App">
      <ToastContainer />
      <Routes />
    </div>
  );
}

export default App;
