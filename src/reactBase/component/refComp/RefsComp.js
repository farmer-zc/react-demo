import React, { Component } from 'react'

const RefIpt = React.forwardRef((props, ref) => (
    <button ref={ref} onClick={ () => props.getDom(ref.current)}>{props.children}</button>
))

export default class RefsComp extends Component {
    
    getDom (el) {
        console.log(el)
    }

    render() {
        const ref = React.createRef()
        return (
            <div style={{padding: '10px', backgroundColor: '#c0c0c0'}}>
                <span>我是refs转发的组件</span>
                <RefIpt ref={ref} getDom={this.getDom} >点击</RefIpt>
            </div>
        )
    }
}
