import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import 'lib-flexible';

import 'antd-mobile/dist/antd-mobile.css';       // 加载 CSS



ReactDOM.render(
    // <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>

    // </React.StrictMode>
,
    document.getElementById('root')
);

reportWebVitals();