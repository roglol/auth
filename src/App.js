import React from 'react';
import {ConnectedRouter, connectRouter} from 'connected-react-router';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {Route, Switch,Redirect} from 'react-router-dom';

import reducer from './reducers';
import { createStore, applyMiddleware,  combineReducers, compose } from 'redux';
import App from './containers/App';


import configureStore, {history} from './store';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
      avtovarmartovar: reducer,
      router: connectRouter(history)
})

const store = createStore(rootReducer,  composeEnhancers(
  applyMiddleware(thunk)
));

const MainApp = () =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
      <Redirect exact from='/' to='/app' component={App}/>
        <Route path="/app" component={App}/>
      </Switch>
    </ConnectedRouter>
  </Provider>


export default MainApp;


