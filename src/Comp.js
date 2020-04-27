import React from 'react'

export default function Comp(props) {
    return (
        <div className="comp">
            {props.children||<h1>默认值</h1>}
            {props.content1}
        </div>
    )
}
