import React, { Component } from 'react'

class BaseComponent extends Component {

    render(){

        let { children } = this.props

        return <div style={style} class='oui-panel' >
            { children }
        </div>
    }
}

var style = {
    boxSizing: 'border-box',
    // display: 'flex',
    width: 300,
    background: 'rgb( 250, 250, 250 )',
    borderRadius: 2,
    padding: '0.5em',
    // border: 'green'
    // margin: '0.5em',
    // marginBottom: '0'
}

export default BaseComponent
