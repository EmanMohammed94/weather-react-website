import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import {store} from './store/store';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   <Provider store={store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
     
    </Provider>

);
reportWebVitals();
