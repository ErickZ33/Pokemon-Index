import React from "react";
import "../css/header.css"

class Header extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="card">
                <img className="pokemonHeader" src={this.props.headerProps.imgPath}></img>
                <div className="card-body">
                    <div>
                        <h1 style={{textAlign:"center"}} className="card-title">{this.props.headerProps.title}</h1>
                    </div>
                    <div>
                        <p style={{textAlign:"center"}} className="card-text">{this.props.headerProps.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;