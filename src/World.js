import React, { Component } from 'react';
import Enemy from './Enemy';
import './World.css';
import hero from './hero1.gif';
import wall from './brickwall.jpg';


class World extends Component {

  constructor(){
    super();
    this.keyHandling = this.keyHandling.bind(this);
  }

  moveRight(){
    this.props.movePlayer("right");
  }

  moveLeft(){
    this.props.movePlayer("left");
  }

  moveUp(){
    this.props.movePlayer("up");
  }

  moveDown(){
    this.props.movePlayer("down");
  }

  logState(){
    console.log(this.props.appstate)
  }

  

  keyHandling(e) {		    		    
    if (e.keyCode === 37) { 
      this.moveLeft();
    } else if (e.keyCode === 39) { //
      this.moveRight();
    } else if (e.keyCode === 38) {
      this.moveUp();
    } else if (e.keyCode === 40) {
      this.moveDown();
    }
  }		  		  
  
  componentDidMount() {		    // Add Event Listener on compenent mount		    
    window.addEventListener("keydown", this.keyHandling);
    console.log('World component did mount');
  }		  	
  
  componentWillUnmount() {     // Remove event listener on compenent unmount		    
    window.removeEventListener("keydown", this.keyHandling);		  
  }

  render() {

    let key=0;
    let enemyKey=-1;
    
    let myWorldMap = this.props.worldMap.map((row)=>{
// eslint-disable-next-line
      return row.map((cell)=>{
        if (cell === 1) {
          key++;
          return <div className="wall" key={key}><img src={wall} alt={"wall"} height="50" width="50"/></div>
        } else if (cell === 0) {
          key++;
          return <div className="floor" key={key}></div>
        } else if (cell === 2) {
          key++; 
          return <div className="player" key={key}><img src={hero} alt={"hero"} height="50" width="50"/></div>                   
        } else if (cell === 3) {
          key++;
          return <div className="health" key={key}></div>          
        } else if (cell === 4) {
          enemyKey++;
          return <Enemy key={enemyKey} enemy={this.props.enemies[enemyKey]}/>          
        } else if (cell === 5) {
          key++;
          return <div className="weapon" key={key}></div>          
        } else if (cell === 9) {
          key++;
          return <div className="darkness" key={key}></div>          
        }
      }); 
    });

    return (
      <div>
        World
        <p>Health: {this.props.health}</p>
        <p>Level: {this.props.level}</p>
        <p>Weapon: {this.props.weapon}</p>
        <p>Damage: {this.props.damage}</p>
        <div className="worldSize">
          {myWorldMap}
        </div>
        <button onClick={this.moveRight.bind(this)}>RIGHT</button>
        <button onClick={this.moveLeft.bind(this)}>LEFT</button>
        <button onClick={this.moveUp.bind(this)}>UP</button>
        <button onClick={this.moveDown.bind(this)}>DOWN</button>
        <button onClick={this.logState.bind(this)}>log state</button>
      </div>
    );
  }
}

export default World;
