import { INPUT_CHANGE, ADD_LIST, DELETE_LIST, GET_LIST } from "./actionTypes";
import axios from 'axios';

// 方法
export const inputChangeAction = (value)=> ({
  type: INPUT_CHANGE,
  value
})
export const addListAction = ()=> ({
  type: ADD_LIST,
})
export const deleteListAction = (index)=> ({
  type: DELETE_LIST,
  index
})

// 接口的方法
export const getList = (data)=> ({
  type: GET_LIST,
  data
})

// 接口
export const getListData = ()=> {
  return (dispatch) => {
    axios.get('http://rap2api.taobao.org/app/mock/242871/get/logistics')
    .then(res => {
      let list = res.data.list.map(item=>item.service_name) ;
      console.log(list)
      dispatch(getList(list));
    });
  }
}

