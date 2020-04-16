import React from 'react';
import ReactDOM from 'react-dom';
import StudentList from "./conponents/StudentList"
const appkey="13271325338_1569760343166"
async function findAllStudents() {
    const stus=await fetch("https://open.duyiedu.com/api/student/findAll?appkey="+appkey)
    .then(resp=>resp.json()).then(resp=>resp.data)
     return stus
}
async function render(params) {
     ReactDOM.render( '正在加载中.....' , document.getElementById('root'));
    const stus=await findAllStudents()
    ReactDOM.render( <StudentList stus={stus} /> , document.getElementById('root'));
}
render()


