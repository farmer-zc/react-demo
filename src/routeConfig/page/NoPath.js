import React from 'react'

export default function NoPath(props) {
    return (
        <div>
            没有页面匹配当前路径: {props.location.pathname}
        </div>
    )
}
