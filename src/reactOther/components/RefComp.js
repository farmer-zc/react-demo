import React, { useRef } from 'react'

export default function RefComp() {

    // 直接可以通过 iptRef.current 获取到dom
    const iptRef = useRef()

    return (
        <div>
            <input type="text" ref={iptRef} />
            <button onClick={() => iptRef.current.focus() }>获取焦点</button>
        </div>
    )
}
