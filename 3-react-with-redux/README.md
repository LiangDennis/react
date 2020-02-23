### react-redux使用
  Provider，connet
  ## 在index中，创建一个JSX变量，使用Provider包裹组件，绑定一个store属性，其值是store仓库
  ## 在App组件中，创建一个store到props的映射，并在导出的时候用connect高级函数，同时删除this.state = store.getState()以及引入的store，最后使用this.props.[name]来访问变量

### 将input框的数据添加到list后，将input框的value值设置为空，防止用户重复提交

### 优化：解构赋值，无状态组件