import React, { Component } from 'react'

export default class ClassRef extends Component {
    constructor(props) {
        super(props)
        this.txtIpt = React.createRef()
    }

    focusTxtIpt () {
        this.txtIpt.current.focus();
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <input type="text" ref={this.txtIpt} />
            </div>
        )
    }
}
