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

/* --- 使用react-redux后，不用自己写检测状态的变化，因为容器组件有自动检测的能力 --- */
/*
  // 检测redux中状态的改变，若状态发生任何改变，那么重新渲染APP组件
  store.subscribe(() => {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  })
*/