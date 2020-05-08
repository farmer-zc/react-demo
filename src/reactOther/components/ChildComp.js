import React, { Component } from 'react'

export default class ChildComp extends Component {
    render() {

        const child = React.Children.map(this.props.children, (children, index) => index%2 === 0 ? children : null )

        return (
            <div>
                {child}
            </div>
        )
    }
}
