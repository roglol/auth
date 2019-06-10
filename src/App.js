import React from 'react';
import  {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {BrowserRouter, Route} from 'react-router-dom'
import axios from 'axios';
import './App.css';

import Esaa from './container/Esaa';
import Signin from './container/Signin';
import Signup from './container/Signup';
import Navbar from './container/Navbar';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  initialValue: 0,
  user:'',
  res: ''
}
const reducer = (state=initialState, action) =>{
  switch(action.type) {
       case "ADD": {
         let newState = {...state}
         return {
           initialValue:newState.initialValue + action.value 
         }
       }
       case "MINUS": {
        let newState = {...state}
        return {
          initialValue:newState.initialValue - action.value 
        }
      }
      case "SUBMIT": {
        return {
          ...state,
          user: action.value
        }
      }
      case "AUTH": {
        console.log('shemovida')
        return {
          ...state,
          res: action.value
        }
      }
  }
}

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
  ));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <div className="App">
        <Route path="/" component={Navbar} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/com" component={Esaa} />
    </div>
      </BrowserRouter>

    </Provider>
   
  );
}

export default App;
