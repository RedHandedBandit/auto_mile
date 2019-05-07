import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
// import Navbar from './Components/Navbar/Navbar';
import routes from './routes';
import { Provider } from 'react-redux';
import store from './ducks/store';

function App() {
  return (
    <Provider store={store}> 
      <HashRouter> 
        <div className="App">
          {/* <Navbar /> */}
          {routes}
        </div>
    </HashRouter>
    </Provider>
  );
}

export default App;
