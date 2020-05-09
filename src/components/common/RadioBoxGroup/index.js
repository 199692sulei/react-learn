import React, { Component } from 'react'
import types from "../../../utils/commonTypes"
import PropTypes from "prop-types"
import withDataGroup from "../HOC/withDataGroup"
/**
 * 一组单选框
 */
class Radio extends Component{
      static propTypes={
          name:PropTypes.string.isRequired,
          info:types.singleData.isRequired,//当前单选框value
          onChange:PropTypes.func,
          value:PropTypes.string.isRequired//当前选中value值
      }
      render(){
          return  <label key={this.props.info.value}>
          <input
              type="radio"
              name={this.props.name}
              value={this.props.info.value}
              checked={this.props.value === this.props.info.value}
              onChange={()=>{
                this.props.onChange && this.props.onChange(this.props.info.value);
              }}
          />
          {this.props.info.text}
      </label>
      }
}
export default withDataGroup(Radio)


  

 