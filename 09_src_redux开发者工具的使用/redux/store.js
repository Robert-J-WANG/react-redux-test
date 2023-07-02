/* 
该文件用于创建并暴露一个store对象，整个应用只有一个store对象 
*/

// legacy_createStore(),用于创建store对象; applyMiddleware, 用于使用中间件thunk实现异步action
import { legacy_createStore, applyMiddleware, combineReducers } from 'redux'

// 引入为store服务的reducer
import countReducer from './reducers/count'

// 引入为person服务的reducer
import personReducer from './reducers/person'

// 引入redux-thunk,用于支持异步action
import thunk from 'redux-thunk'

// 引入开发者工具库 redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'

// 汇总所有的reducers,合并成一个总的reducer
const allReducers = combineReducers(
    {
        he: countReducer,
        rens: personReducer
    }
)

// 创建并暴露store对象
export default legacy_createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));