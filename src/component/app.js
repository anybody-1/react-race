import React , {Component}from 'react'


class App extends Component{
    render(){
        return (
            <div>
                <div>
                    你点击了<strong>{this.props.n}</strong>次
                </div>
                <div>
                    <button className='add' onClick={()=>this.props.add()}>+1</button>
                </div>
            </div>
        )
        
    }
    
}
export default App