import React from 'react'
import "./Pager.css"
/**
 * 
 * @param {*} props
 * 1.current 当前页码
 * 2.total    总数据量
 * 3.limit    页容量 每页显示的数据量
 * 4.panelNumber  数字页码最多显示多少个
 * 5.pageNumber  总页数
 */
export default function Pager(props) {
    const pageNumber=getPageNumber(props)
    if(pageNumber===0){
        return null;
    }
    const min=getMinNumber(props)
    const max=getMaxNumber(min,pageNumber,props)
    const numbers=[]
    for(let i=min;i<=max;i++){
        numbers.push(<span  onClick={()=>{toPage(i,props)}} className={i===props.current?"item active":"item"} key={i}>{i}</span>)
    }
    return (
        <>
           <span 
            onClick={()=>{toPage(1,props)}}
           className={props.current===1?"item disabled":"item"}>首页</span> 
           <span 
            onClick={()=>{toPage(props.current-1<1?1:props.current-1,props)}}
           className={props.current===1?"item disabled":"item"}>上一页</span> 
           {numbers}
           <span 
           onClick={()=>{toPage(props.current+1>pageNumber?pageNumber:props.current+1,props)}}
           className={props.current===pageNumber?"item disabled":"item"}>下一页</span> 
           <span 
           onClick={()=>{toPage(pageNumber,props)}}
           className={props.current===pageNumber?"item disabled":"item"}>尾页</span> 
           <span className="current">{props.current}</span>
           /
           <span>{pageNumber}</span>
         

        </>
    )
}
 /**
  * 
  * @param {*} target 目标页码
  * @param {*} props  所有属性
  */
function toPage(target,props) {
    if(props.current===target){
        return ;
    }
    props.onPageChange&&props.onPageChange(target)
}
/**
 * 计算总页数
 * @param {*} props 
 */
function getPageNumber(props) {
     return Math.ceil(props.total/props.limit)
}
/**
 * 
 * @param {*} props 
 */
function getMinNumber(props) {
    let min=props.current-Math.floor(props.panelNumber/2)
    if(min<1){
        min=1
    }
    return min
}
function getMaxNumber(min,pageNumber,props) {
    let max=min+props.panelNumber-1;
    if(max>pageNumber){
        max=pageNumber
    }
    return max
}
