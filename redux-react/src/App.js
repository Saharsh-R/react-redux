import React from 'react';
import './App.css';

import { Provider } from 'react-redux';

import Posts from './components/Posts';
import Postform from './components/Postform';

import store from './store'
function App() {
  return (
    <Provider store = {store}>
      <div className="App">


        <Postform />
        <hr />
        <Posts />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </div>
    </Provider>
  );
}

export default App;
