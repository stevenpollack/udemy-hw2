import React, { Component } from 'react'

class CharComponent extends Component {
  style = {
    display: 'inline-block',
    padding: '16px',
    'text-align': 'center',
    margin: '16px',
    border: '1px solid black'
  }

  render () {
    let output = null
    if (this.props.char) {
      output = (
        <div
          style={this.style}
          onClick={this.props.handleClick}
        >
          {this.props.char === ' ' ? '\u00a0' : this.props.char}
        </div>
      )
    }
    return output
  }
}

export default CharComponent
