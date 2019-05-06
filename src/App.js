import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import routes from './routes';

function App() {
  return (
    <HashRouter> 
      <div className="App">
        <Navbar />
        {routes}
      </div>
    </HashRouter>
  );
}

export default App;
