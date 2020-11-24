import ReactDOM from 'react-dom';

import Header from './components/header'
import Footer from './components/footer'
import Pokemon from './components/Pokemon'
import PokemonInfo from './components/PokemonInfo'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

var headerProps = {
  title: "1st Gen Pokemon Index",
  description: "Click pokemon to see more info",
  imgPath: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
}

ReactDOM.render(
  <div>
    <Router>
      <Header headerProps={headerProps} />
        <Switch>
          <Route exact path="/">
            <Pokemon />
          </Route>
          <Route path="/about/:id">
            <PokemonInfo />
          </Route>
        </Switch>
      <Footer />
    </Router>
  </div>,
  document.getElementById('root')
);
