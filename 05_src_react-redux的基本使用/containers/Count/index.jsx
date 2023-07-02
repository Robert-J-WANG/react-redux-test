// 引入Count的UI组件
import CountUI from '../../components/Count'

// 引入redux中的store对象
// import store from '../../redux/store'
/* 
******** 
这里需要注意：引入store的过程不在容器组件里，而在容器组件的父组件中，通过props传递给容器组件 *********** 
*/

// 引入connect方法用来创建count的容器组件（连接UI组件与redux）
import { connect } from 'react-redux'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action'





/* ----------------step1 传递状态给UI组件 ------------------------ */
/* 
    a函数的返回值(必须是一个对象，参考传递pros的形式，key=value. 类似：<CountUI key={value}/>),作为状态传递给UI组件.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value--状态
*/
// function a() {
//     return { count: 999 }
// }
/* -----------------step2 从redux中获取状态 ------------------------ */
/* 
    不必使用store.getState()方法获取状态，因为在使用react-redux时react-redux自身调用了store.getState()方法，并把住保存到了state中，只需传入state即可
*/
function mapStateToProps(state) {
    return { count: state }
}


/* ----------------step1 传递操作状态的方法给UI组件 ------------------------ */
/* 
    b函数的返回值(必须是一个对象，参考传递pros的形式，key=value. 类似：<CountUI key={value}/>),作为状态传递给UI组件.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value--操作状态的方法
*/
// function b() {
//     return {
//         jia: () => { console.log(1) }
//     }
// }

/* ----------------step2 从redux中获取操作状态的方法 ------------------------ */
/* 
    通知redux执行加法,给dispatch 方法传递一个对象。
*/
function mapDispatchToProps(dispatch) {
    return {
        jia: value =>
            // dispatch({ type: 'increment', data: value });
            // 使用action对象
            dispatch(createIncrementAction(value)),

        jian: value => dispatch(createDecrementAction(value)),
        asyncJia: (value, time) => dispatch(createIncrementAsyncAction(value, time))
    }
}

//使用connect创建并暴露一个count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)