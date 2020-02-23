### 使用小写字母创建文件夹，否则有可能创建文件时无法成功。

### 入口文件：src下面的index.js 

### serviceWorker 对应PWA 支持离线浏览网页，必须要第一次有网络浏览网页后

import React, {Component} from 'react'
这其实是ES6的语法-解构赋值，如果你分开写就比较清楚了，你可以把上面一行代码写成下面两行.

import React from 'react'
const Component = React.Component
如果你对ES6语法不熟悉，你完全可以使用这种形式来进行编写。

### 虚拟DOM

### JSX 语法 JSX 即 javascript and xml
class 要写成 className
可以这么理解：当语法遇到<> 时，将其解析为html，当为{} 时，将其解析为javascript

### 自定义组件语法，第一个字母大写

### 添加fragment 为组件最外层标签，可以防止flex布局不起作用，或者多写更多的代码来设置样式

### 数据双向绑定，自定义的方法中的this 会指向undefined，所以需要bind(this)；需要通过this.setState({key: e.target.value})的方式来修改值。以及在循环中添加key值，key值不能直接是index，因为数据多了会出错，所以应该使用index+item的方式
  评论区：清空后再focus input框
  这里不是数据双向绑定？
  push的使用，先push，在setState。不能push可以用contact
  key值一般是后台的id

### jsx 中的注释，直接Ctrl+/

### HTML中有两个注意点：一个是class，另一个是for（label中的for属性）

### react插件，快速插件，提示内容，快速生成代码块

### 单向数据流，直接父组件的state直接传递给子组件是无法修改其值的，需要通过在父组件中创建修改state数据的方法，然后将该方法传递给子组件

### 调试工具的使用，即浏览器的扩展工具

### 子组件将父组件传递过来的值进行校验，import PropTypes form 'prop-types'，在类之外进行校验，校验方式是 [子组件类名].propTypes = {[value]: PropTypes.string}，其他还有PropTypes.number，PropTypes.

### focus对焦，绑定ref属性，比较简单的方法：在input中绑定属性 ref={(input)=>{this.input=input}}，在其他地方就可以使用this.input变量，无需在this.state中定义。第二种方式：在constructor中定义this.inputRef = React.createRef(); input中绑定属性ref={this.inputRef};两种方式的使用focus方式是this.[name].focus();

### 生命周期 评论（17版很多生命周期将废弃）
  ##Initialization 挂载阶段 对应constructor
    setup props and state
  ##Mounting
    componentWillMount --> render --> componentDidMount
  ##Updation
    props
      componentWillReceiveProps --> showComponentUpdate -true-> (如果是false不往下走)componentWillUpdate --> render --> componentDidUpdate
    states
      showComponentUpdate -true-> (false不走) componentWillUpdate --> render --> componentDidUpdate
  ##unMounting
    componentWillUnmount

### 性能问题：当父组件发生变化时，会同时出发子组件的render函数，需要在子组件中调用生命周期函数shouldComponentUpdate(nextProps, nextState)通过判断next中的值是否改变来判断是否返回true

### 
  ##npm i axios , 同--save，但建议使用--save
  ##npm i axios --save , 生产环境要使用的包
  ##npm i axios --save-dev , 开发环境要使用的包
  ##npm i axios -g , 安装到全局

### 请求数据的时间，componentDidMount中