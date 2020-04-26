import React, { Component } from 'react'
import Tick from "./Tick"

export default class TickControl extends Component {
       state={
           isOver:false
       }
       constructor(props){
           super(props)
           this.handleClick=this.handleClick.bind(this)
           this.handleOver=this.handleOver.bind(this)
       }
       handleClick(){
        console.log("点击了")
       }
       handleOver(){
        this.setState({
            isOver:true
        })
       }
    render() {
        let status="正在倒计时"
        if(this.state.isOver){
            status="倒计时已完成"
        }
        return (
            <div>
                 <Tick number={10} onClick={this.handleClick} onOver={this.handleOver}/>
            <h1>
                {status}
            </h1>
            </div>
        )
    }
}
