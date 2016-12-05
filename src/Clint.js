import React, { Component } from 'react';
import axios from 'axios';

class Clint extends Component {


componentDidMount(){
  axios.get('https://openapi.etsy.com/v2/shops/HalusDesigns/listings/active?&api_key=hqluhr8ykdm8irqfjfh9rw8c')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

  render(){
    return(
      <div>
          <h3>Clint</h3>
      </div>
    )
  }
}

export default Clint;
