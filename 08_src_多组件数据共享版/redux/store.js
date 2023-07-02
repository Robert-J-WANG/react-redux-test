/*
    该文件专门用于暴露一个store对象，整个应用只有一个store对象
 */

// 引入legacy_createStore，专门用于创建redux的核心对象store 
// 引入applyMiddleware，用于异步action是传递 thunk
import { legacy_createStore, applyMiddleware, combineReducers } from 'redux'
// 引入为Count组件服务的countReducer
import countReducer from './reducers/count'

// 引入为Person组件服务的personReducer
import personReducer from './reducers/person'
// 引入redux-thunk,用于支持异步action
import thunk from 'redux-thunk'

// 合并reducer
const allReducers = combineReducers(
    {
        he: countReducer,
        rens: personReducer
    }
)


export default legacy_createStore(allReducers, applyMiddleware(thunk));