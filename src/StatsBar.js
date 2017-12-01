import React, { Component } from 'react';
import './StatsBar.css'

class StatsBar extends Component {
  render() {
    
  return (
    <div className="statsBar">
    <ul>
      <li> Health: {this.props.health} </li>
      <li className="divider">|</li>
      <li> Level: {this.props.level} </li>
      <li className="divider">|</li>
      <li> Weapon: {this.props.weapon} </li>
      <li className="divider">|</li>
      <li> Damage: {this.props.damage} </li>
      <li><button onClick={this.props.toggleDarkness}>Toggle Darkness</button></li>
      <li><button>Right</button></li>
      <li><button>Left</button></li>
      <li><button>Up</button></li>
      <li><button>Down</button></li>
    </ul>
  
    </div>
  )        
  }
}

export default StatsBar;
