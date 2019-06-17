import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import Dashboard from '.'


class App extends React.Component{
    render(){
        const {match} = this.props
        return(
            <Route path={`${match.url}/dashboard`} component={Dashboard}/>
        )
    }
}