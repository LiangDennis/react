### Redux 原理
  React component --> Action creator
    ^                      |
    |                dispatch(action)
    |                      v
    ------(state)--------Store -<-(newState)-(previousState,action)->- Reducer

### onClick等方法通过bind的方式传递参数

### 使用antd绑定ref属性的时候，this.[name]指向的是这个antd组件，所以需要再加一层才能获取到值

### reducer根据不同的action产生不同的state，大项目才能发挥redux的作用，小demo看不出优势（来自评论）

### 扩展工具Redux_Dev_Tools，查看redux

### 如果有这个方法就是用的一种方式，fn.add && fn.add();

### store相当于一个仓库，但是没有管理能力，所以需要使用到reducer，而store中的数据会自动推送到reducer中

### 业务流程
  ## 创建store仓库，创建管理仓库的reducer
    store：引入createStore，创建createStore方法，引入reducer文件，将reducer对象放进createStore方法中，导出store
    reducer：创建一个默认的state，导出方法，方法中有两个参数，第一个是state，第二个是action
  ## 绑定的input标签的placeholder和value的时候，需要使用到发布订阅模式
    发布，组件中
      store.subscribe(this.storeChange);
      this.storeChange = this.storeChange.bind(this);
      storeChange() {this.setState(store.getState())}
    订阅，reducer中
      if(action.type === 'inputChange') {
        //第一层深拷贝
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
      }

### 在reducer中使用switch时需要return newState时候，不需要使用break了。return是直接结束当前函数返回 break是直接结束当前循环返回 

### 如果action中的type属性多了某些字母，那么在reducer中就不能匹配成功，从而导致input框无法输入，创建一个actionTypes文件，用来保存那些action常量

### 创建一个actionCreator文件，用来处理action，导出方法export const [fn] = (value)=>({value})，相当于直接返回一个对象

### 创建一个TodoListUI文件，将UI与逻辑分离，UI层通过props获取值

### 无状态组件，因为TodoListUI没有任何的(业务逻辑***)，所以使用无状态组件的方式创建该组件，能够提高性能。不需要继承component，将TODOListUI写成箭头函数，并传递props值，同时组件中不需要使用this

### compose（增强函数，函数的链式调用） 多个中间件的使用
