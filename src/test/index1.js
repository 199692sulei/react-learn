import React from 'react';
import ReactDOM from 'react-dom';
// const h1=(
//    <React.Fragment>
//     <h1>hello world 
//     <span>我是一个span元素</span>
//     </h1>
//    <p>我是一个p元素</p>
//    </React.Fragment>
//  )
//  console.log(h1)
// ReactDOM.render(h1, document.getElementById('root'));
// const img=(
//  <img alt="" src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg"></img>
// )
// ReactDOM.render(img,document.getElementById('root'))
//#endregion
// const a=123,b=234;
// const obj={
//   a:1,
//   b:2
// }
const numbers=new Array(30);
numbers.fill(4)
const list=numbers.map((item,i)=>(<li key={i}>{i}</li>))
// const arr=[1,undefined,null,3,43];
// const str="asdhgkl;hjgl"
// const obj=<span>span元素</span>
const div=(
  <h1>
   <ul>
      {list}
  </ul>
  </h1>
 
)
// const div=React.createElement('div',{'className':'demo'},`${a}*${b}=${a*b}`,)
ReactDOM.render(div, document.getElementById('root'));
//可以放置元素对象，不能放置普通对象
