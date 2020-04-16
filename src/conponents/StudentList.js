import React, { Component } from 'react'
import Student from "./Student"
export default class StudentList extends Component {
    render() {
        //组件数组
        const students=this.props.stus.map(item=> <Student key={item.id} {...item}/>)
        return (
           <ul>
              {students}
           </ul>
        )
    }
}

