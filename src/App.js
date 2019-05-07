import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import routes from './routes';
import axios from 'axios';
import { connect } from 'react-redux';
import {employee} from './ducks/reducer';

function App(props) {

  axios.get('/auth/me').then( res => {
    //reduxstate
    props.employee(res.data)
    console.log('app res.data', res.data)
  })
  .catch(error => console.log('nope', error))
  return (
      <HashRouter> 
        <div className="App">
          {props.username ? <Navbar /> : null}
          {routes}
        </div>
    </HashRouter>
  );
}

const mapStateToProps = (reduxState) => {
  const {username} = reduxState
  return {
    username
  }
}

const dispatchStateToProps = {
  employee
}

export default connect(mapStateToProps, dispatchStateToProps)(App);
