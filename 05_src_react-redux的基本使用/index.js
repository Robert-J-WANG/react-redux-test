import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 检测redux中状态的改变，若状态发生任何改变，那么重新渲染APP组件
store.subscribe(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
})