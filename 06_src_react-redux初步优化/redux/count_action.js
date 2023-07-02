/* ------------------------- 该文件专门为Count组件生成action对象 ------------------------ */

// 引入常量字符模版
import { INCREMENT, DECREMENT } from './constant'

// 同步action，返回的是一般的object对象
export const createIncrementAction = data => ({ type: INCREMENT, data })
export const createDecrementAction = data => ({ type: DECREMENT, data })

// 异步action，返回的是函数。函数课执行异步操作
export const createIncrementAsyncAction = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time);
    }

}