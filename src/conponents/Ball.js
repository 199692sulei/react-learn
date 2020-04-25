import React, {
    Component
} from 'react'
import "./Ball.css"
export default class Ball extends Component {

    constructor(props) {
        super(props);
        //属性中需要分别传递横纵坐标上的速度，每秒移动的像素值
        //props.xSpeed,props.ySpeed 背景颜色 如果没有床底使用红色
        this.state = {
            left: props.left || 0, //横坐标
            top: props.top || 0, //纵坐标
            xSpeed: props.xSpeed,
            ySpeed: props.ySpeed
        };
        let duration = 16; //间隔毫秒数
        setInterval(() => {
            //根据速度改变left和top值
            const xDis = this.state.xSpeed * duration / 1000;
            const yDis = this.state.ySpeed * duration / 1000;
            let newLeft = this.state.left + xDis;
            let newTop = this.state.top + yDis;
            if(newLeft<=0){
                newLeft=0;
                this.setState({
                    xSpeed:-this.state.xSpeed
                })
            }else if(newLeft>=document.documentElement.clientWidth-100){
                newLeft=document.documentElement.clientWidth-100;
                this.setState({
                    xSpeed:-this.state.xSpeed
                })
            }
            if(newTop<=0){
                newTop=0;
                this.setState({
                    ySpeed:-this.state.ySpeed
                })
            }else if(newTop>=document.documentElement.clientHeight-100){
                newTop=document.documentElement.clientHeight-100;
                this.setState({
                    ySpeed:-this.state.ySpeed
                })
            }
            this.setState({
                left:newLeft,
                top:newTop
            })
        }, duration);
    }
    render() {
        return ( <div className = "ball"
            style = {
                {
                    left: this.state.left,
                    top: this.state.top,
                    background: this.props.bg || "#f40"
                }
            } >

            </div>
        )
    }
}