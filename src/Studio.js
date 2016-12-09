import React, { Component } from 'react';
import './Studio.css';

class Studio extends Component {
  render(){
    return(
      <div className="studio-page">
        <h1 className="studio-title">the studio</h1>
        <p>The photography studio offeres everything you need for studio shots
            including studio lighting, backdrops, table and tripod.
          <br />
          For reservations and more information please contact:
          <br />
          Clint Grounds
           </p>
          <a className="studio-info" href="mailto:clintgrounds@gmail.com">clintgrounds@gmail.com</a>
          <br />
          <a className="studio-info" herf="tel:8127982406">812 . 798 . 2406</a>




        <div className="studio-pics">
          <img id="studio" src="/images/one.jpeg" alt="Zaragosa House"/>
          <img id="studio" src="/images/two.jpeg" alt="Zaragosa House"/>
          <img id="studio" src="/images/three.jpeg" alt="Zaragosa House"/>
          <img id="studio" src="/images/car.jpeg" alt="Zaragosa House"/>
          <img id="studio" src="/images/jumping.jpeg" alt="Zaragosa House"/>
        </div>
      </div>
    )
  }
}

export default Studio;
