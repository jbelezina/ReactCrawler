import React, { Component } from 'react';
import './Enemy.css';

class Enemy extends Component {

  log(){
    console.log(this.props);
  }

  render() {    
    return <div onClick={this.log.bind(this)} className="enemy"/>          
  }
}
export default Enemy;
