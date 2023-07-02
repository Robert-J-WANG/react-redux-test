// 此文件用于创建专为Count组件服务的action对象


// 引入constant常量，防止拼写错误
import { INCREMENT, DECREMENT } from '../constant'

export const createIncrementAction = data => ({
    type: INCREMENT,
    data
})

export const createDecrementAction = data => ({
    type: DECREMENT,
    data
})

export const createIncrementAsyncAction = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time)
    }
}
