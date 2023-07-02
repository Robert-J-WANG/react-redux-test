/* 
该文件用于创建并暴露一个store对象，整个应用只有一个store对象 
*/

// legacy_createStore(),用于创建store对象; applyMiddleware, 用于使用中间件thunk实现异步action
import { legacy_createStore, applyMiddleware } from 'redux'

// 引入redux-thunk,用于支持异步action
import thunk from 'redux-thunk'

// 引入开发者工具库 redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'

// 引入总的reducer
import reducers from './reducers'

// 创建并暴露store对象
export default legacy_createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));