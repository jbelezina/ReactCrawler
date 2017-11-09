import React, { Component } from 'react';
import './World.css';

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
    } else if (e.keyCode === 39) { 
      this.moveRight();
    } else if (e.keyCode === 38) {
      this.moveUp();
    } else if (e.keyCode === 40) {
      this.moveDown();
    }
  }		  		  
  
  componentDidMount() {		    // Add Event Listener on compenent mount		    
    window.addEventListener("keydown", this.keyHandling);
  }		  	
  
  componentWillUnmount() {     // Remove event listener on compenent unmount		    
    window.removeEventListener("keydown", this.keyHandling);		  
  }





  
  render() {

    let key=0
    
    let myWorldMap = this.props.worldMap.map((row)=>{

      return row.map((cell)=>{
        if (cell === 1) {
          key++;
          return <div className="wall" key={key}></div>
        } else if (cell === 0) {
          key++;
          return <div className="floor" key={key}></div>
        } else if (cell === 2) {
          key++;
          return <div className="player" key={key}></div>          
        }
      }); 
    });

    return (
      <div>
        World
        <p>Health: {this.props.health}</p>
        <p>Level: {this.props.level}</p>
        <p>Weapon: {this.props.weapon}</p>
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
