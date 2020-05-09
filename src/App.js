import React from 'react'
import Test from "./components/common/SelectBoxGroup/Test"
// import {A,B} from "./components/Comps"
// import withLog from "./HOC/withLog"
// import withLogin from "./HOC/withLogin"
// const AComp=withLogin(withLog(A,"ahg"))
// const BComp=withLogin(withLog(B,"agh"))
export default function App() {
    return (
        <div>
           {/* <AComp isLogin a={1}/>
           <BComp isLogin b={2}/> */
           <Test/>
           }
        </div>
    )
}
