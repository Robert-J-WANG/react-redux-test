/* ------------------------- 该文件专门为Count组件生成action对象 ------------------------ */

// 引入常量字符模版
import { INCREMENT, DECREMENT } from './constant'

// 基本格式
// export function createIncrementAction(data) {
//     return { type: 'increment', data }
// }

// 改为箭头函数
export const createIncrementAction = data => ({ type: INCREMENT, data })

// export function createDecrementAction(data) {
//     return { type: 'decrement', data }
// }

// 改为箭头函数
export const createDecrementAction = data => ({ type: DECREMENT, data })