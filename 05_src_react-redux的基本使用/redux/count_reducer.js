/*
    1. 该文件是用于创建一个为Count服务的reducer,reducer的本质是一个函数
    2. reducer函数会接到2个参数，分别为：之前的状态（preState)，动作对象（action）
*/

// 引入常量字符模版
import { INCREMENT, DECREMENT } from './constant'

const initState = 0
export default function countReducer(preState = initState, action) {
    console.log(preState)
    const { type, data } = action;
    switch (type) {
        case INCREMENT:
            return preState + data;
        case DECREMENT:
            return preState - data;
        default:
            return preState
    }
}