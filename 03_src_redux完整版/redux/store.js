/*
    该文件专门用于暴露一个store对象，整个应用只有一个store对象
 */

/* -------------- 引入legacy_createStore，专门用于创建redux的核心对象store -------------- */
import { legacy_createStore } from 'redux'
/* -------------------------- 引入为Count组件服务的reducer -------------------------- */
import countReducer from './count_reducer'
/* --------------------------------- 易于理解的写法 -------------------------------- */
// const store = legacy_createStore(countReducer)
// export default store

/* ---------------------------------- 优化写法 ---------------------------------- */
export default legacy_createStore(countReducer);