import React from 'react'
import Pokemon from './Pokemon'
import Axios from 'axios'

class PokemonInfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            goBack:false,
            abilities:[],
            height:"",
            weight:""
        }
    }
    componentDidMount(){
        Axios.get("https://pokeapi.co/api/v2/pokemon/" + this.props.pokemonInfo.index)
        .then((response) => {
            this.setState({
                abilities: response.data.abilities,
                height: response.data.height,
                weight: response.data.weight
            })
    }); 
    }
    goBack(){
        this.setState({
            goBack:true
        })
    }
    render(){
        if(this.state.goBack)
        {
            return <Pokemon />
        }
        return(
            <div>
                <h1>{this.props.pokemonInfo.name}</h1>
                <h2>{this.props.pokemonInfo.index}</h2>
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
                <button onClick={() => this.goBack()}>Go Back</button>
            </div>
        )
    }
}

export default PokemonInfo;