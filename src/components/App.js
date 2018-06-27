import React from "react";
import {Provider} from "react-redux";
import configureStore from '../store'
import './App.css';

// import connectedComponents 
import PostWordContainer from "../container/postWordContainer"
// import DevTools from "../container/DevTools.jsx"

// configure the store 
export const store = configureStore() ;
// set the initial state 
const initialState = store.getState() ;
// display the initial state 
console.log('initial state:', JSON.stringify(initialState, null, 2)) ;
// subscribe a listen observing each state changement
store.subscribe(() =>
  console.log('state changed:', store.getState())
   
)

class App extends React.Component {
  render() {
    return (

      <Provider store={store}> 
      <div className="App">
        <PostWordContainer/>
       
      </div>
      </Provider>
    );
  }
}

export default App;
