import React from 'react'

class Counter extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            counter:0,
            color:"blue"
        }
    }
    CheckColor() {
        this.setState({counter:this.state.counter + 1})
        if(this.state.counter >= 14){
            this.setState({color:"red"});
        }
    }
    render(){
        return (
            <div>
                <h1>Hello Erick!</h1>
                <button style={{"backgroundColor":this.state.color, "color":"white"}} onClick={() => this.CheckColor()}>Click Me</button>
                <p>You click me {this.state.counter} times</p>
            </div>
        )
    }
}

export default Counter;