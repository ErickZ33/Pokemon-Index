import React, { Component } from "react";
import "../css/footer.css"

class Footer extends Component
{
    constructor(props){
        super(props);
    }
    render(){

    function doSomething() {
        alert('The link was clicked.');
    }
    
    return (
        <div className="card footer">
            <p>Built in 2020 using React</p>
        </div>
        )
    }
};

export default Footer;