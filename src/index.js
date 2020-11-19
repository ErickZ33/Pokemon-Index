import ReactDOM from 'react-dom';

import Header from './components/header'
import Footer from './components/footer'
import Voting from './components/voting'
import Counter from './components/counter'
import Pokemon from './components/Pokemon'

var headerProps = {
  title: "1st Gen Pokemon Index",
  description: "Click pokemon to see more info",
  imgPath: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
}

var footerProps = {
  title: "First React Project!",
  description: "This is using class components",
  imgPath: "./images/shaq.gif"
}

ReactDOM.render(
  <div>
    <Header headerProps={headerProps} />
    <Pokemon />
    <Footer footerProps={footerProps} />
  </div>,
  document.getElementById('root')
);
