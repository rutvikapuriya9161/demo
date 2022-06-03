import React, { Component } from 'react';
import City from './containers/City';
import CityFun from './containers/CityFun';
import Country from './containers/Country';
import CountryFun from './containers/CountryFun';

class App extends Component {
  render() {
    return (
      <div>
        <City />
        <CityFun />
        <Country />
        <CountryFun />
      </div>
    );
  }
}



export default App;