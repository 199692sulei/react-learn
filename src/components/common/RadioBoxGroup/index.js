import React, { Component } from 'react'

export default class RadioBoxGroup extends Component {
    handleChange=e=>{
        this.props.onChange&&this.props.onChange(e.target.value,this.props.name,e)
    }
    getRadios(){
     return  this.props.datas.map(it=>(
           <label key={it.value}>
                  <input
                      type="radio"
                      name={this.props.name}
                      value={it.value}
                      checked={this.props.value===it.value}
                      onChange={this.handleChange}
                  />{it.text}
           </label>
       ))
    }
    render() {
        const bs=this.getRadios()
        return (
            <div>
                {bs}
            </div>
        )
    }
}
