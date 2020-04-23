import React from 'react'

const ValidationComponent = ({ textLength = 0 }) => {
  let output = <p>text long enough</p>
  if (textLength < 5) {
    output = <p>text not long enough</p>
  } else if (textLength > 32) {
    output = <p>text too long!</p>
  }

  return textLength !== 0 ? output : null
}

export default ValidationComponent
