import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {asyncComponent} from 'react-async-component';
import artists from './routes/Artists'


const Artists = ({match}) => (
    <div className="wrapper">
    <Switch>
<Route path={`${match.url}`} component={artists}/>
    </Switch>
    </div>
)

export default Artists;
