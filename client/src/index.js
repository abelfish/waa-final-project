import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './redux/store';
import {Keyckloak} from 'keycloak-js';
import { useDispatch } from 'react-redux';
import { setUser } from './redux/UserReducer';

let initOptions = {
  realm: 'project-realm',
  clientId: 'springboot-api',
  accessTokenUri:'http://localhost:8090/realms/project-realm/protocol/openid-connect/token',
  'ssl-required': 'external',
  'verify-token-audience': true,
  credentials: {
    secret: '7fcXVZS71HO8ZMjm6Ik34oiqR73BpAoc',
  },
  'confidential-port': 0,
  'policy-enforcer': {},

};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
