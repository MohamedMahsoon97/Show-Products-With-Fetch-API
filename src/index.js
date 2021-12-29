import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { reducer } from './Redux/reducer';
import { store } from './store';

// const store = createStore(reducer);

ReactDOM.render( 
      <Provider store={store}>
            <App /> 
      </Provider>
      , document.getElementById('root')
);