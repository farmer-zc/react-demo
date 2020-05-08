import React from 'react'

export default function Detail(props) {
    console.log(props)
    return (
        <div>
            <h2>我是detail页面 </h2>参数type是：{props.match.params.type}
        </div>
    )
}