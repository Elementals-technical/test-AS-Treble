import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { TrebleApp } from "@threekit-tools/treble"
import './index.css';
import { createDispatchHook, createSelectorHook, Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter as Router } from 'react-router-dom';

const store1Context = React.createContext();
export const useStoreDispatch = createDispatchHook(store1Context);
export const useStoreSelector = createSelectorHook(store1Context);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} context={store1Context}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('tk-treble-root')
);
