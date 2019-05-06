import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Personal from './Components/Wizard/Personal/Personal';
import Admin from './Components/Admin/Admin';
import Profile from './Components/Profile/Profile';
import Register from './Components/Register/Register';

export default (
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/personal' component={Personal} />
        <Route path='/admin' component={Admin} />
        <Route path='/profile' component={Profile} />
        <Route path='/register' component={Register} />
    </Switch>
)