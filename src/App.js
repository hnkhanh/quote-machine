import React , {Component} from 'react';
import './App.css';
import QuoteMBox from './components/QuoteBox';
import {random} from 'lodash'

const API = 'https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quotes: [],
      index: 0,
    }
  }

  componentDidMount(){
    fetch(API)
      .then(data => data.json())
      .then(quotes => this.setState({ quotes }, this.generateIndex))
  }
  
  generateIndex = () => {
    const {quotes} = this.state; 
    if(!quotes.length){
      return undefined;
    }
    else {
      const index = random(0, quotes.length -1);
      this.setState({index})
    } 
  }

  render(){
    return (
      <QuoteMBox state={this.state} generateIndex={this.generateIndex}/>
  );
}
}

export default App;
