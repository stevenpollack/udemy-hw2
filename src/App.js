import React, { Component } from 'react'
import './App.css'
import ValidationComponent from './ValidationComponent'
import CharComponent from './CharComponent'

class App extends Component {
  state = {
    userText: '',
    textLength: 0,
    textArr: []
  }

  handleOnChange = (event) => {
    const userText = event.target.value
    const textLength = userText.length
    const textArr = userText.split('')
    this.setState({
      userText: userText,
      textLength: textLength,
      textArr: textArr
    })
  }

  handleOnClick = (event, index) => {
    const textArr = [...this.state.textArr]
    textArr.splice(index, 1)
    this.setState({
      userText: textArr.join(''),
      textLength: textArr.length,
      textArr: textArr
    })
  }

  render () {
    const textArr = this.state.textArr

    const charItems = textArr.map((char, index) => (
      <li
        key={index}
        style={{
          display: 'inline',
          'list-style-type': 'none'
        }}
      >
        <CharComponent
          handleClick={(event) => (this.handleOnClick(event, index))}
          char={char}
        />
      </li>
    ))

    return (
      <div className='App'>
        <input
          type='text'
          placeholder='your string here!'
          style={{ 'font-size': '16px' }}
          onChange={this.handleOnChange}
          value={this.state.userText}
        />
        <ValidationComponent textLength={this.state.textLength} />
        <CharComponent textArr={this.state.textArr} />
        <ul>{charItems}</ul>

        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    )
  }
}

export default App
