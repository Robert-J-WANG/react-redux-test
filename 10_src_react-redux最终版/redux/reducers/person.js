
import { ADD_PERSON } from '../../redux/constant'

// reducer的作用
// 1. 初始化状态（人的列表）
const initState = [{ id: "001", name: 'tom', age: '20' }]

// 2. 加工状态
export default function personReducer(preState = initState, action) {

    const { type, data } = action
    switch (type) {
        case ADD_PERSON:
            return [data, ...preState]
        default:
            return preState;
    }
}