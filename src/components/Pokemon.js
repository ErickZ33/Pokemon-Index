import React from 'react'
import Axios from 'axios'

import PokemonInfo from './PokemonInfo'
import "../css/pokemon.css"

class Pokemon extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            Pokemon: [],
            PokemonImage: [],
            isLoading:true
        }
    }
    componentDidMount(){
        Axios.get("https://pokeapi.co/api/v2/pokemon/?offset=00&limit=10")
            .then((response) => {
                this.setState({
                    Pokemon: response.data.results,
                    PokemonInfo:false,
                    isLoading: false,
                    CurrentPokemon:{},
                    Types:[],
                    typeColor:""
                })
            this.getPokemonImage()
        }); 
    }
    async getPokemonImage(){
        this.setState({isLoading:true})
        const getRequests = []
        this.state.Pokemon.forEach((item) => {
            let request = Axios.get(item.url)
            getRequests.push(request)
        })
        let promises = await Axios.all(getRequests)
        promises.forEach((poke) => {
            this.setState({
                PokemonImage:[...this.state.PokemonImage, 
                    {   
                        front_default:poke.data.sprites.front_default,
                        front_shiny:poke.data.sprites.front_shiny,
                        back_default:poke.data.sprites.back_default,
                        back_shiny:poke.data.sprites.back_shiny,
                        dream_world_front_default:poke.data.sprites.other.dream_world.front_default,
                        dream_world_back_default:poke.data.sprites.other["official-artwork"].front_default,
                        type:poke.data.types
                    }
                ]
            })
        })
        this.setState({isLoading:false})
    }
    displayInfo(pokemon, index){
        this.setState({
            PokemonInfo:true,
            CurrentPokemon:{
                "name":pokemon,
                "index":index
            }
        })
    }
    render(){
        if(this.state.isLoading){
            return <div className="App">Loading...</div>
        }
        if(this.state.PokemonInfo){
            return <PokemonInfo pokemonInfo={this.state.CurrentPokemon}/>
        }
        return(
            <div className="container">
                {
                    this.state.Pokemon.map((pokemon, index) => {
                        return this.state.PokemonImage[index] != null 
                        ?   <div key={index} className="row pokemonContainer" onClick={() => this.displayInfo(pokemon.name, (index + 1))}>
                                <div>
                                    <h3 className="centerText name">{pokemon.name} #{index + 1}</h3>
                                    <div>
                                        <img className="image" src={this.state.PokemonImage[index].front_default} alt="not found"></img >
                                        <img className="image" src={this.state.PokemonImage[index].back_default} alt="not found"></img >                                   
                                    </div>
                                    <div>
                                        <img className="image" src={this.state.PokemonImage[index].front_shiny} alt="not found"></img >
                                        <img className="image" src={this.state.PokemonImage[index].back_shiny} alt="not found"></img >
                                    </div>
                                    <div>
                                        <img className="image" src={this.state.PokemonImage[index].dream_world_front_default} alt="not found"></img >
                                        <img className="image" src={this.state.PokemonImage[index].dream_world_back_default} alt="not found"></img >
                                    </div>
                                    <div>
                                        {
                                            this.state.PokemonImage[index].type.map((type, i) => {
                                                return  <div key={i} className={"type " + type.type.name}>
                                                            <h4>{type.type.name}</h4>
                                                        </div>   
                                            })
                                        }
                                    </div>
                                    <hr></hr>
                                </div>
                            </div>
                        :   <div className="App">Loading...</div>
                    })
                }
            </div>
        )
    }
}

export default Pokemon;