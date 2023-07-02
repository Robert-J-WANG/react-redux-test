/*
1. 该文件用于创建并暴露一个reducer，专门为store服务，reducer的本质是一个函数
2. 该函数接收2个参数，分别为之前的状态（preState）和action对象
*/
// 引入constant常量，防止拼写错误
import { INCREMENT, DECREMENT } from '../constant'

const initState = 0;
export default function countRecucer(preState = initState, action) {

    // 从action对象中获取type，data
    const { type, data } = action;
    // 根据type决定如何加工数据
    switch (type) {
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data
        default:
            return preState
    }
}