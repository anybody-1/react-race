import React from 'react'

class Race extends React.Component {
  constructor() {
    super()
    this.state = {
      result1: 0,
      result2: 0
    }
    this.t0 = Date.now()
  }
  success1 = m => {
    let res1 = Date.now() - this.t0
    this.setState({ result1: res1 })
  }
  success2 = m => {
    let res2 = Date.now() - this.t0
    this.setState({ result2: res2 })
  }
  render() {
    return (
      <div>
        <div className="header">
          <Time1 result={this.state.result1}></Time1>
          <Judge></Judge>
          <Time2 result={this.state.result2}></Time2>
        </div>
        <Playground
          success1={this.success1}
          success2={this.success2}
        ></Playground>
      </div>
    )
  }
}
class Time1 extends React.Component {
  render() {
    return (
      <div>
        <h2>🐇用时</h2>
        <div>{this.props.result}</div>
      </div>
    )
  }
}
class Time2 extends React.Component {
  render() {
    return (
      <div>
        <h2>🐢用时</h2>
        <div>{this.props.result}</div>
      </div>
    )
  }
}
class Playground extends React.Component {
  render() {
    return (
      <div className="playground">
        <Track1 success={this.props.success1}></Track1>
        <Track2 success={this.props.success2}></Track2>
      </div>
    )
  }
}
function Judge() {
  return <div>裁判</div>
}
class Track1 extends React.Component {
  constructor() {
    super()
    this.state = {
      n: 0,
      style: {
        transform: 'translate(0%)'
      }
    }
    this.start()
  }
  start() {
    let time = setInterval(() => {
      this.setState(state => {
        return { n: state.n + 10 }
      })
      this.setState(state => {
        return { style: { transform: `translate(${state.n}%)` } }
      })
      if (this.state.n >= 100) {
        clearInterval(time)
        this.props.success('兔子')
      }
    }, 1000)
  }
  render() {
    return (
      <div>
        <div style={this.state.style} className="player">
          🐇
        </div>
        <div className="track"></div>
      </div>
    )
  }
}
class Track2 extends React.Component {
  constructor() {
    super()
    this.state = {
      n: 0,
      style: {
        transform: 'translate(0%)'
      }
    }
    this.start()
  }
  start() {
    let time = setInterval(() => {
      this.setState(state => {
        return { n: state.n + 5 }
      })
      this.setState(state => {
        return { style: { transform: `translate(${state.n}%)` } }
      })
      if (this.state.n >= 100) {
        clearInterval(time)
        this.props.success('乌龟')
      }
    }, 1000)
  }
  render() {
    return (
      <div>
        <div style={this.state.style} className="player">
          🐢
        </div>
        <div className="track"></div>
      </div>
    )
  }
}
export default Race
