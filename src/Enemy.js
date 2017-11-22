import React, { Component } from 'react';
import './World.css';
import monster from './monster1.gif';

class Enemy extends Component {


  render() {    
    return <div className="enemy">
    <img src={monster} alt={"monster"} height="50" width="50"/>
    </div>          
  }
}
export default Enemy;
