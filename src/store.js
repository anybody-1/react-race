import { createStore } from 'redux'
const reducer = (state={n:0},action)=>{
    switch (action.type) {
        case 'add1':
            let newState = {n:state.n+action.payload}
          return newState
        default:
          return state
      }
}
const store  = createStore(reducer)
export default store