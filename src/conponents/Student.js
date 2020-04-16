import React from 'react'

export default function Student(props) {
    return (
        <li>
            【姓名】:{props.name},
            【性别】:{props.sex===1?'男':'女'},
            【email】:{props.email},
            【出生日期】:{props.birth}
        </li>
    )
}
