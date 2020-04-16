import React from 'react'
export default class MyClass extends React.Component{
     render(){
        //  console.log(this.props)
        if(this.props.obj){
            return <p>{this.props.obj.name}                              {this.props.obj.age}</p>
        }
           return <h1>{this.props.number} {this.props.enable}</h1>
     }
}