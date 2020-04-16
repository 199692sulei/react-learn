import React from 'react';
import ReactDOM from 'react-dom';
import MyFunc from "./MyFuncComp"
import MyClass from "./MyClassComp"
ReactDOM.render( <div>
   {/* {MyFuncComp()} */}
   <MyFunc number="2"></MyFunc>
   <MyFunc number={3}></MyFunc>
   <MyFunc number={4}></MyFunc>
   <MyFunc number={5}></MyFunc>
   <MyClass number={2} obj={
     {
      name:'sulei',
      age:18
     }
   } enable="true"/>
   <MyClass number={3}></MyClass>
   <MyClass number={4}></MyClass>
   <MyClass number={5}></MyClass>
</div> , document.getElementById('root'));

