import React, { Component } from 'react'

class ValidationComponent extends Component {
  render () {
    const textLength = this.props.textLength
    let output = <p>text long enough</p>
    if (textLength < 5) {
      output = <p>text not long enough</p>
    } else if (textLength > 32) {
      output = <p>text too long!</p>
    }

    return textLength !== 0 ? output : null
  }
}

export default ValidationComponent
