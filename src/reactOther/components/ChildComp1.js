import React, { Component } from 'react'

export default class ChildComp1 extends Component {
    state = {
        count:1
    }
    render() {
        return (
            <div>
                {
                    React.Children.map(this.props.children, children => React.cloneElement(children,{count: this.state.count}))
                }
            </div>
        )
    }
}
