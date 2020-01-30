import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { createStore } from 'redux'
import './component/race.css'
console.log(createStore)
function counter(state, action) {
  state = state || {
    money: { account: 10000 }
  }
  switch (action.type) {
    case '我花钱了':
      return { money: { account: state.money.account - action.payload } }
    default:
      return state
  }
}
class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="containt">
        <Firstfather money={this.props.store.money}></Firstfather>
        <Secondfather money={this.props.store.money}></Secondfather>
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
    store.dispatch({ type: '我花钱了', payload: 100 })
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
const store = createStore(counter)
render()
store.subscribe(render)
// ========================================
function render() {
  ReactDOM.render(
    <App store={store.getState()} />,
    document.getElementById('root')
  )
}
