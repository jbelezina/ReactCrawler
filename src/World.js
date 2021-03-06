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
    let myWorldMap = this.props.coveredMap.map((row)=>{
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
        } else if (cell === 10) {
          key++;
          return <div className="boss" key={key}></div>          
          return <div className="boss" key={key}></div>          
        }
      }); 
    });

    let gameOver;
    if(this.props.gameOver){
      gameOver =  (<div className="gameOver">
      <h1>SORRY, YOU DIED</h1>
      </div>)
    }
      
    let bonus;
    if(!this.props.bonus){
      bonus =  (<div className="gameOver">
      <h1>YOU KILLED ALL THE MONSTERS!!! HEALTH BONUS!!! GOOD LUCK WITH THE BOSS...</h1>
      </div>)
    }

    return (
      <div id="world">
        {gameOver}
        {bonus}
        <div className="worldSize">
          {myWorldMap}
        </div>
        <button onClick={this.logState.bind(this)}>log state</button>
      </div>
    );
  }
}

export default World;
