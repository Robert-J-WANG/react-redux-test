## 1. 求和案例_redux精简版
    (1).去除Count组件自身的状态。 
    (2).src下创建：
        -src
          -redux
            -store.js
            -count_reducer.js
    (3).store.js：
        1）. 引入redux中的legacy_createStore，创建redux的核心对象store 
        2）. legacy_createStore调用时，要传入一个为其服务的reducer
        3）. 暴露store对象
    (4).count_reducer.js：
        1）. reducer的本质是一个函数：
                接收参数：之前的状态（preState),action对象
                返回结果：加工后的状态
        2）. reducer有2个作用：
                初始化状态
                加工状态
        3）. reducer被第一次调用时，是store自动触发的，传递的preState是undefined
    (5).在入口文件index.js中监测store中状态的改变，一旦发生改变重新渲染<App/>
        备注：redux 只负责管理状态，至于状态的改变驱动页面的展示，要靠我们自己写

## 2. 求和案例_redux完整版  
    新增文件：
       1）. count_action.js 专门用于创建action对象
       2）. constant.js 专门用于放置容易写错的type值

## 3. 求和案例_redux异步action版  
    (1).需要明确：延迟的动作不想交给组件本身，而是交给action。 
    (2).何时需要异步action：想要对状态进行操作，但是具体的数据靠异步任务返回
    (3).具体编码步骤：
        1）. npm i redux-thunk, 并配置在store中 
        2）. 创建action的函数不再返回一般对象，而是一个函数，该函数中写异步任务。
        3）. 异步任务有结果后，分发一个同步的action去真正操作数据。
    (4).备注：异步action不是必须要写的，组件完全可以自己等到异步任务的结果了，再去分发同步action。

## 4. 求和案例_react-redux 基本使用
    (1).需要明确2个概念：
        1）. UI组件：不能使用任何redux的API，只负责页面的呈现，交互等。 
        2）. 容器组件：负责和redux通信，将结果交个UI组件。
    (2).何时创建一个容器组件————靠react-redux的connect函数
        connect(mapStateToProps,mapDispatchToProps)(UI组件)
            -mapStateToProps:映射状态，返回值是一个对象
            -mapDispatchToProps:映射操作状态的方法，返回值是一个对象
    (3).备注1：容器中的store是靠props传进去的，而不是在容器中直接引入
    (4).备注2：mapDispatchToProps，亦可以是一个对象

## 5. 求和案例_react-redux优化
    (1).容器组件和UI组件整合成一个文件。
    (2).无需自己给容器组件传递store，给<App/>包裹一个<Provider store={store}/>即可。
    (3).使用react-redux后也不用再自己检测redux中状态的改变了，容器组件可以自动完成这个工作。
    (4).matchDispatchToProps也可以简写成一个对象，使用key:value形式，value为action对象名。
    (5).一个组件要和redux打交道要经过哪几步？
        1）. 定义好UI组件，---不暴露
        2）. 引入connect生成一个容器组件，并暴露，写法如下：
            connect(
                state=>({key:value}), // 映射状态
                {
                    key1:xxxAction1,  // 映射状态的方法
                    key2:xxxAction2,
                    ...
                }
            )
        3）.在UI组件中通过this.props.xxxx读取和操作状态  

## 6. 求和案例_react-redux多组件数据共享版
    (1).定义一个Person组件，和Count组件通过redux共享数据。
    (2).为Person组件编写：reducer,action,配置constant常量
    (3).重点：
            Person组件的reducer和Count组件的reducer要使用combineReducers进行合并。
            合并后的总状态是一个对象！！！
    (4).交给store的是总的reducer,最后注意在组件去除状态的时候，要取到位
    

## 7. 求和案例_react-redux开发者工具的使用
    (1). npm install i redux-devtools-extension。
    (2). store中进行配置
         import {composeWithDevTools} from 'redux-devtools-extension '
    (3). 改写store对象
        const store=createStore(allReducers,composeWithDevTools(applyMiddleware(thunk)))

## 8. 求和案例_react-redux最终版
    (1). 所以变量名字要规范，尽量触发对象的简写形式。
    (2). reducers文件夹中，编写index.js,专门用于汇总并暴露所以的reducers

## 9. 打包项目到服务器运行，测试代码
    (1). 打包项目文件
        npm run build
    (2). 安装第三方库serve
        npm i serve -g
    (3). 运行项目
        serve build