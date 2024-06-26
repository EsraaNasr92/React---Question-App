import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/App.css';

import { MyProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MyProvider>
      <App />
    </MyProvider>
);
