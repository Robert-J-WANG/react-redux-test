import CountUI from '../../components/Count'
import { connect } from 'react-redux'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action'

/* ------------- 从代码角度精简 ---------------------------- */
/*
    // 映射状态
    const mapStateToProps = state => ({ count: state })

    // 映射操作状态的方法
    const mapDispatchToProps = dispatch => (
        {
            jia: value => dispatch(createIncrementAction(value)),
            jian: value => dispatch(createDecrementAction(value)),
            asyncJia: (value, time) => dispatch(createIncrementAsyncAction(value, time))
        }
    )

    //使用connect创建并暴露一个count的容器组件
    export default connect(mapStateToProps, mapDispatchToProps)(CountUI)

*/

/* ------------- 从redux API角度精简代码 ---------------------------- */

//使用connect创建并暴露一个count的容器组件
export default connect(
    state => ({ count: state }),
    {
        jia: createIncrementAction,
        jian: createDecrementAction,
        asyncJia: createIncrementAsyncAction
        // 不需要写dispatch函数，react-redux会自动分发
    }
)(CountUI)