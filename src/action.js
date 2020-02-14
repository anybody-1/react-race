import { connect } from 'react-redux'
import App from './component/app'

const mapStateToProps = state => {
  console.log(state)
    return {
      n:state.n
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      add: () => {
        dispatch({type:'add1',payload: 1})
      }
    }
  }
  
  const actions = connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
  
  export default actions
