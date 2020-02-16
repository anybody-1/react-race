import React, { Component } from 'react'
import { render } from 'react-dom'
import './index.css'
// ========================================
let theme = React.createContext()

function Button(props) {
  return <button onClick={props.change}>改变主题</button>
}
function Box(props) {
  return <div className={`box ${props.theme}`}>
    {props.children}
  </div>
}
function Input(props) {
  return <input type="text" value={props.theme} />
}
class App extends Component {
  constructor() {
    super()
    this.state = {
      color: 'blue',
      changeColor: () => {
        if (this.state.color === 'blue') {
          this.setState({
            ...this.state,
            color: 'green'
          })
        } else {
          this.setState({
            ...this.state,
            color: 'blue'
          })
        }

      }
    }
  }
  render() {
    return (
      <theme.Provider value={this.state}>
        <theme.Consumer>
          {theme => (
            <div>
              <Box theme={theme.color}>
                <Button change={theme.changeColor}></Button>
              </Box>
              <Box theme={theme.color}>
                <Input></Input>
              </Box>
            </div>
          )}
        </theme.Consumer>
      </theme.Provider>
    )

  }
}
render(
  <App />,
  document.getElementById('root')
)
