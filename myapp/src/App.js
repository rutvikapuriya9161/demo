import React, { Component } from 'react';
import City from './containers/City';
import Country from './containers/City';
import CityFun from './containers/CityFun';
import CountryFun from './containers/CityFun';

class App extends Component {
  render() {
    return (
      <div>
        {/* <City /> */}
        <CityFun />
      </div>
    );
  }
}

export default App;