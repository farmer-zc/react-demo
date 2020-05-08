import React from 'react'

function HocComp(SayHello) {
    class Comp extends React.Component {

        render () {
            const {forwardRef, ...rest} = this.props
            return <SayHello ref={forwardRef} {...rest} />
        }
    }

    return React.forwardRef((props, ref) => <Comp {...props} forwardRef={ref}></Comp>)
}

class SayHello extends React.Component {

    sayHello () {
        alert('hello')
    }

    render () {
        return <div>我是sayhello组件</div>
    }
}

export default HocComp(SayHello)