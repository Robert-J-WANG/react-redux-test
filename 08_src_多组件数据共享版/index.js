import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/store'
import { Provider } from 'react-redux' // 给所有的组件传递store对象

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
