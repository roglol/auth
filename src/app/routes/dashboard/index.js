import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

const Dashboard = ({match}) => (
    <div className="wrapper">
    <Switch>
<Redirect exact from={`${match.url}/`} to={`${match.url}/dashboard`} component={'./routes/Dashboard'}/>

    </Switch>
    </div>
)
