import React, { Component } from 'react'
import Modal from "./common/Modal"
export default class Test extends Component {
    state={
        showModal:false
    }
    hideModal=()=>{
     this.setState({
         showModal:false
     })
    }
    showModal=()=>{
        this.setState({
            showModal:true
        })
    }
   
    render() {
        return (
            <div>  
            <img src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3248642432,1337955019&fm=26&gp=0.jpg" alt=""></img>
                {
                   this.state.showModal?( 
                         <Modal onClose={this.hideModal}>
                           <div style={{background:"#fff"}}>
                             <h1>sulei lkajgbkl;sajg</h1>
                             <button onClick={this.hideModal}>关闭蒙层</button>
                           </div>
                         </Modal>):null
                }
                <button onClick={this.showModal}>显示蒙层</button>
            </div>
        )
    }
}
