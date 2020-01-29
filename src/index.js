import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { createStore } from 'redux'
// import Race from './component/race'
import './component/race.css'

let store = createStore(counter)
var money = {
  account: 10000
}
var eventFile = {}
var eventBus = {
  on(eventName, fn) {
    if (!eventFile[eventName]) {
      eventFile[eventName] = []
    }
    eventFile[eventName].push(fn)
  },
  trigger(eventName, props) {
    if (eventFile[eventName]) {
      eventFile[eventName].forEach(e => {
        e([props])
      })
    }
  },
  init() {
    this.on('我花钱了', number => {
      money.account -= number
      render()
    })
  }
}
eventBus.init()
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      money: money
    }
  }
  render() {
    return (
      <div className="containt">
        <Firstfather money={this.state.money}></Firstfather>
        <Secondfather money={this.state.money}></Secondfather>
      </div>
    )
  }
}
class Firstfather extends React.Component {
  render() {
    return (
      <div className="father">
        大爸<strong>{this.props.money.account}</strong>
        <Son1 money={this.props.money}></Son1>
        <Son2 money={this.props.money}></Son2>
      </div>
    )
  }
}
class Secondfather extends React.Component {
  render() {
    return (
      <div className="father">
        二爸<strong>{this.props.money.account}</strong>
        <Son3 money={this.props.money}></Son3>
        <Son4 money={this.props.money}></Son4>
      </div>
    )
  }
}
class Son1 extends React.Component {
  render() {
    return (
      <div className="son">
        儿子1 <strong>{this.props.money.account}</strong>
      </div>
    )
  }
}
class Son2 extends React.Component {
  render() {
    return (
      <div className="son">
        儿子2 <strong>{this.props.money.account}</strong>
      </div>
    )
  }
}
class Son3 extends React.Component {
  render() {
    return (
      <div className="son">
        儿子3 <strong>{this.props.money.account}</strong>
      </div>
    )
  }
}
class Son4 extends React.Component {
  cost(num) {
    eventBus.trigger('我花钱了', num)
  }
  render() {
    return (
      <div className="son">
        儿子4 <strong>{this.props.money.account}</strong>
        <button onClick={() => this.cost(100)}>花钱</button>
      </div>
    )
  }
}

// ========================================
function render() {
  ReactDOM.render(<App />, document.getElementById('root'))
}
render()
