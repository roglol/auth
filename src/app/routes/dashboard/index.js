import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {asyncComponent} from 'react-async-component';
import dashboard from './routes/Dashboard'


const Dashboard = ({match}) => (
    <div className="wrapper">
    <Switch>
<Redirect exact from={`${match.url}/`} to={`${match.url}/dashboard`} component={dashboard}/>
<Route path={`${match.url}/dashboard`} component={dashboard}/>
    </Switch>
    </div>
)

export default Dashboard;
