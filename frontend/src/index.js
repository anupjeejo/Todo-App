import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='flex h-screen bg-gray-700 place-content-center items-center'>
      <Provider store={store}>
        <App />
        <Toaster />
      </Provider>
    </div>
);

reportWebVitals();
