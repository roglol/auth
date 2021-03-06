import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {asyncComponent} from 'react-async-component';
import dashboard from './routes/Dashboard'


const Dashboard = ({match}) => (
    <div className="wrapper">
    <Switch>
<Route path={`${match.url}`} component={dashboard}/>
    </Switch>
    </div>
)

export default Dashboard;
