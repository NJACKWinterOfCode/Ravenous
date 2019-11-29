import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import BusinessList from '../BusinessList/BusinessList'
import SearchBar from '../SearchBar/SearchBar'
import Yelp from '../../util/Yelp'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
 
    Yelp.search(term, location, sortBy)
    .then((businesses) => {
      if(typeof businesses !="undefined")
      {
        this.setState({
        businesses: businesses
      })
      }
     

    })
  }

  render(){
    return (
      <div className="App">
        <h1>Ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/> 
        <BusinessList businesses={this.state.businesses}/>
        
        
        
      </div>
    )
  }
}

export default App;
