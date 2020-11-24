import React from 'react'
import Axios from 'axios'
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

class PokemonInfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:"",
            index:0,
            height:"",
            weight:"",   
            abilities:[]     
        }
    }
    componentDidMount(){
        const id = this.props.match.params.id
        const { name } = this.props.location.state
        
        this.setState({
            name:name,
            index:id
        })
        Axios.get("https://pokeapi.co/api/v2/pokemon/" + id)
        .then((response) => {
            this.setState({
                abilities: response.data.abilities,
                height: response.data.height,
                weight: response.data.weight
            })
    }); 
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <h2>{this.state.index}</h2>
                <h1>Height: {this.state.height}"</h1>
                <h1>Weigth: {this.state.weight} lbs</h1>
                <h3>Abilities:</h3>
                {
                    this.state.abilities.map((ability,index) =>{
                        return  <div key={index}>
                                    <p>{ability.ability.name}</p>
                                </div>
                    })
                }
                <Link to="/">Go Back</Link>
            </div>
        )
    }
}

export default withRouter(PokemonInfo);