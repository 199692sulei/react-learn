import React from 'react';
import ReactDOM from 'react-dom';
import src1 from "./assets/1.jpg"
import src2 from "./assets/2.webp"
import src3 from "./assets/3.jpg"
let index=0,timer=null;
let srcArr=[src1,src2,src3]
let container=document.getElementById('root')
function render() {
  ReactDOM.render(<img src={srcArr[index]} alt=""/>, container);
}
function start() {
   stop()
  setInterval(() => {
      index=(index+1)%3
      render()
  }, 2000);
}
function stop() {
  clearInterval(timer)
}
// render()
// start()
container.onmouseenter=function () {
     stop()
}
container.onmouseleave=function () {
     start()
}