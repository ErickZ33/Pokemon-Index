import React, { Component } from "react";

class Voting extends React.Component{

    constructor(props){
        super(props);   

        this.state = {
            React:0,
            Vue:0,
            Angular:0,
            Ember:0
        }
    }

    render(){
        
        return (
            <div className="card" style={{"width":"100rem", "border":"1px solid black"}}>
                <h1>Vote Your Favorite JS Library</h1>
                <div className="card-body">
                    <div>
                        <div style={{"display":"inline-block", "width":"200px"}}>
                            <p>{this.state.React}</p>
                        </div>
                        <div style={{"display":"inline-block", "width":"200px"}}>
                            <h3>React</h3>
                        </div>
                        <div style={{"display":"inline-block", "width":"200px"}}>
                            <button onClick={() => this.setState({React: this.state.React + 1})} className="btn btn-link">+</button>
                        </div>
                    </div>
                    <div>
                        <div style={{"display":"inline-block", "width":"200px"}}>
                            <p>{this.state.Vue}</p>
                        </div>
                        <div style={{"display":"inline-block", "width":"200px"}}>
                            <h3>Vue</h3>
                        </div>
                        <div style={{"display":"inline-block", "width":"200px"}}>
                            <button onClick={() => this.setState({Vue: this.state.Vue + 1})} className="btn btn-link">+</button>
                        </div>
                    </div>
                    <div>
                        <div style={{"display":"inline-block", "width":"200px"}}>
                            <p>{this.state.Angular}</p>
                        </div>
                        <div style={{"display":"inline-block", "width":"200px"}}>
                            <h3>Angular</h3>
                        </div>
                        <div style={{"display":"inline-block", "width":"200px"}}>
                            <button onClick={() => this.setState({Angular: this.state.Angular + 1})} className="btn btn-link">+</button>
                        </div>
                    </div>
                    <div>
                        <div style={{"display":"inline-block", "width":"200px"}}>
                            <p>{this.state.Ember}</p>
                        </div>
                        <div style={{"display":"inline-block", "width":"200px"}}>
                            <h3>Ember</h3>
                        </div>
                        <div style={{"display":"inline-block", "width":"200px"}}>
                            <button onClick={() => this.setState({Ember: this.state.Ember + 1})} className="btn btn-link">+</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Voting;