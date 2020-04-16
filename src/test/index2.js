import React from 'react';
import ReactDOM from 'react-dom';
// const url="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg"
const content=" <h1>我是h1元素</h1> <span>我是span元素</span> "
const div=(
  <div dangerouslySetInnerHTML={{
    __html:content
  }}>
    {/* <img src={url} alt="" className={'image'} style={{marginLeft:"50px",marginTop:"50px"}}></img> */}

  </div>
)
ReactDOM.render(div, document.getElementById('root'));

const str="ajskgljahioewhjgoiaja;ljkwklghj;lak"
function test(str){
      let len=str.length;
      let obj={};
      let letter=null;
      let count=0
      for(let i=0;i<len;i++){
         if(!obj[str.charAt(i)]){
           obj[str.charAt(i)]=1
         }else{
           obj[str.charAt(i)]++
         }
        
      }
      console.log(obj)
     for (const key in obj) {
       if (obj[key]>count) {
         count=obj[key]
         letter=key
       }
     }
     console.log('出现最多字母是'+letter+'出现了'+count+"次")
      
}
test(str)