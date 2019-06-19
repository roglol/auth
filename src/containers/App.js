import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import MainApp from '../app/index'
import Navigation from '../components/Navigation/Navigation';
import "../assets/vendors/style";

class App extends Component {
    render(){
        const {match} = this.props
        return (
            <>
            <Navigation/>
     <Switch>
<Route path={`${match.url}`} component={MainApp}/>
     </Switch>
     </>
        )
    }
}

export default App;