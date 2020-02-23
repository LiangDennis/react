import React,{Component,Fragment} from 'react';
import './miss.css';
import MissItem from "./missItem";
import axios from "axios";

class Miss extends Component {
  constructor(props) {
    super(props);
    // focus自动对焦
    // this.inputRef = React.createRef();

    this.state = {
      inputValue: '',
      // list: ['jojo', 'mumu', 'lala'],
      list: []
    };
  }

  // 17版增加的函数
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log('mount');
  //   console.log(nextProps);
  //   console.log(prevState);
  //   return null;
  // }

  // 组件结束挂载
  componentDidMount() {
    console.log('end mount 刚进来的时候执行一次');
    axios.post('http://rap2api.taobao.org/app/mock/242871/get/logistics')
      .then(res => {
        console.log('get data success');
        // 使用map函数将item中某个属性传回，filter会将整个item传回
        let list = res.data.list.map(item => {
          return item.service_name;
        });
        this.setState({
          list: list
        });
      }).catch(e => {
        console.log('get data fail');
        console.log(e)
      });
  }

  // 组件是否要更新，false不更新
  shouldComponentUpdate() {
    console.log('2-upDate');
    return true; // 返回false 将不往下执行，即不会执行render等一系列函数
  }

  // 组件将要更新，如果上面函数为false就不会执行
  // componentWillUpdate() {
  //   console.log('2-componentWillUpdate');
  // }

  render() {
    console.log('rendering');
    return (
      <Fragment>
        {/* 服务菜单 */}
        <div>
          <label htmlFor="service">增加服务：</label>
          <input 
            id="service"
            value={this.state.inputValue} 
            onChange={this.inputChange.bind(this)} 
            ref={(input)=> {this.input=input;}}
            onKeyPress={this.addList.bind(this)} />
          <button onClick={this.addList.bind(this)}> 增加服务 </button>
        </div>
        {/* 绑定ref属性的方式 */}
        <ul ref={(ul)=>{this.ul=ul}}>
          {
            this.state.list.map((item, index) => {
              // 此处的return 没有小括号，不允许换行
              // return <li key={index+item}>{item}</li>
              return (
                // 添加删除功能
                // <li
                //   className="li-list"
                //   key={index+item}
                //   onClick={this.deleteItem.bind(this, index)}
                // >
                //   {item}
                // </li>

                // 父子组件通信
                // contentText是自定义的
                // 传递方法
                <MissItem 
                  key={index+item} 
                  contentText={item}
                  index={index}
                  deleteItem={this.deleteItem.bind(this)}/>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }

  inputChange(e) {
    this.setState({
      // inputValue: e.target.value
      inputValue: this.input.value
    });
  }

  addList(e) {
    // console.log(e.type);
    // 如果是点击事件和enter事件，就触发业务流程
    if(e.which === 13 || e.type === 'click') {
      // 值不为空
      if(this.state.inputValue !== '') {
        this.setState({
          list: [...this.state.list, this.state.inputValue],
          inputValue: '' // 设置完成后，将inputValue设置成空
        },()=>{
          // this.setState是异步方法，如果要获取到this.ul中li的数量，按照这种回调函数的方式
          // 打印ul中li的数量
          console.log(this.ul.querySelectorAll('li').length);
        });
      }else {
        alert('empty');
      }
      // 自动对焦，两种方式
      // this.inputRef.current.focus();
      this.input.focus();
    }
  }

  deleteItem(index, e) {
    // 此处为正确的写法
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list
    });
    // 同时也可以直接操作this.state.list.splice(index, 1);但是官方不推荐，因为react后期更新会严重的影响性能
  }
}

export default Miss