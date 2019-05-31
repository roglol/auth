import React from 'react';
import  {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';

import Esaa from './container/Esaa';
const initialState = {
  initialValue: 0
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
  }
}

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <div className="App">
        <Route path="/" component={Esaa} />
        
    </div>
      </BrowserRouter>

    </Provider>
   
  );
}

export default App;
