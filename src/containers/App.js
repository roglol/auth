import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import MainApp from '../app/index'

class App extends Component {
    render(){
        const {match} = this.props
        return (
     <Switch>
<Route path={`${match.url}app`} component={MainApp}/>
     </Switch>
        )
    }
}

export default App;