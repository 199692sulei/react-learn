import React, { Component } from 'react'

export default class FormTest extends Component {
    state={
        loginId:"",
        loginPwd:"",
        sex:"male",
        chooseLoves:[],
        loves:[
            {value:"football",text:"足球"},
            {value:"baseball",text:"篮球"},
            {value:"movie",text:"电影"},
            {value:"music",text:"音乐"},
            {value:"other",text:"其他"}
        ],
        city:'beijing'
    }
    handleChange=e=>{
      let val=e.target.value;
      let name=e.target.name;
      if(e.target.type==="checkbox"){
          if(e.target.checked){
              val=[...this.state.chooseLoves,val]
          }else{
              val=this.state.chooseLoves.filter(it=>it!==val)
          }
      }
      this.setState({
          [name]:val
      })
    }
    getLoveCheckBoxes(){
           const  bs=this.state.loves.map(it=>(
               <label key={it.value}>
               <input type="checkbox" name="chooseLoves"
                   onChange={this.handleChange}
                   checked={this.state.chooseLoves.includes(it.value)}
                   value={it.value}
               />
                {it.text}
               </label>
           ))
           return bs
    }
    render() {
        const bs=this.getLoveCheckBoxes()
        return (
            <div>
                <p>
                      <input type="text" name="loginId" 
                       value={this.state.loginId} 
                      onChange={this.handleChange}></input>
                </p>
                <p>
                      <input type="password" name="loginPwd" 
                       value={this.state.loginPwd} 
                      onChange={this.handleChange}></input>
                </p>
                <p>
                      <label>
                            <input type="radio" name="sex" 
                            value="male"
                            onChange={this.handleChange}
                             checked={this.state.sex==="male"}
                            />男
                      </label>
                      <label>
                        <input type="radio" name="sex" 
                             value="female"
                             onChange={this.handleChange}
                             checked={this.state.sex==="female"}
                            />女
                      </label>
                </p>
                <p>
                    {bs}
                </p>
                <p>
                      <select name="city" value={this.state.city} onChange={this.handleChange}>
                            <option value="beijing">北京</option>
                            <option value="shanghai">上海</option>
                            <option value="hangzhou">杭州</option>
                      </select>
               </p>
                <p>
                    <button onClick={
                        ()=>{console.log(this.state)}}
                        >获取表单元素</button>
                </p>
            </div>
        )
    }
}
