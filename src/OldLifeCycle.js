import React, { Component } from 'react'

export default class OldLifeCycle extends Component {
    constructor(props){
        super(props)
        this.state={
            n:0
        };
        console.log("一个新组件诞生了")
    }
    componentWillMount() {
        console.log("组件即将被挂载")
        // this.setState({
        //     n:3
        // })//不允许使用setState()
    }
    componentDidMount(){//重点
        console.log("componentDidMount","挂载完毕")
        //启动定时器 ajax请求
    }
    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps","接收到新的属性值",this.props,nextProps)
    }
    
    shouldComponentUpdate(nextProps,nextState){//性能优化点  重点  是否重新渲染该组件通过返回true 和false 来确定
        console.log("shouldComponentUpdate","是否应该重新渲染",this.props,nextProps,this.state,nextState)
        if(this.props.n===nextProps.n&&this.state.n===nextState.n){
            return false;
        }
        else{
            return true
        }
    }
    componentWillUpdate(nextProps,nextState){
       console.log("componentWillUpdate","组件即将被重新渲染");
    }
    componentDidUpdate(prevProps,prevState){
        console.log("componentDidUpdate","组件已完成重新渲染",prevProps,prevState);
        
    }
    componentWillUnmount(){
        console.log("componentWillUnmount","组件被销毁");
        
    }
    /**
     *严禁使用setState(0)
     *
     * @returns
     * @memberof OldLifeCycle
     */
    render() { //重点
        
        console.log("render","渲染","返回的Render函数会被挂载到DOM树中最终渲染真实DOM中")
        return (
            <div>
                  <h1>旧生命周期组件</h1>
                  <h2>属性n:{this.props.n}</h2>
                  <h2>状态n:{this.state.n}</h2>
                  <button onClick={()=>{
                      this.setState({
                          n:this.state.n+1
                      })
                  }}>状态+1</button>
            </div>
        )
    }
}
