import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../src/Redux/Store'

import reportWebVitals from './reportWebVitals';



import './index.css';
import Rout from './Routes/Routes';



ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>      
        <Rout />      
    </React.StrictMode>
 </Provider>,
  document.getElementById('root')
);




reportWebVitals();
