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
    <div className='flex min-h-screen w-screen bg-gray-700 place-content-center items-center overflow-x-hidden'>
      <Provider store={store}>
        <App />
        <Toaster />
      </Provider>
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
