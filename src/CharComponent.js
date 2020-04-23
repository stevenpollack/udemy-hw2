import React, { Component } from 'react'

// class CharComponent extends Component {
//   style = {
//     display: 'inline-block',
//     padding: '16px',
//     textAlign: 'center',
//     margin: '16px',
//     border: '1px solid black'
//   }

//   render () {
//     let output = null
//     if (this.props.char) {
//       output = (
//         <div
//           style={this.style}
//           onClick={this.props.handleClick}
//         >
//           {this.props.char === ' ' ? '\u00a0' : this.props.char}
//         </div>
//       )
//     }
//     return output
//   }
// }

const CharComponent = ({ char, handleClick }) => {
  const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black'
  }

  if (char) {
    return (
      <div style={style} onClick={handleClick}>
        {char === ' ' ? '\u00a0' : char}
      </div>
    )
  }
  return null
}

export default CharComponent
