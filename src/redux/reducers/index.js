/*
该文件为一个总的reducer,汇总了所以组件的reducer
*/

import { combineReducers } from 'redux'
// 引入为count组件服务的reducer
import count from './count'

// 引入为person组件服务的reducer
import persons from './person'

// 汇总所有的reducers,合并成一个总的reducer
export default combineReducers(
    {
        count,
        persons,
    }
)

