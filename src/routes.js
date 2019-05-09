import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
// import Personal from './Components/Wizard/Personal/Personal';
import Admin from './Components/Admin/Admin';
import Profile from './Components/Profile/Profile';
import Register from './Components/Register/Register';
import Wizard from './Components/Wizard/Wizard';
import EditProfile from './Components/Profile/EditProfile/EditProfile';

export default (
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/wizard' component={Wizard} />
        <Route path='/admin' component={Admin} />
        <Route path='/profile' component={Profile} />
        <Route path='/register' component={Register} />
        <Route path='/editProfile' component={EditProfile} />
    </Switch>
)