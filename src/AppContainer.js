import React, { Component } from 'react';
import World from './World';


class AppContainer extends Component {
  constructor(){
    super();
    this.state = {
      level:1,
      health:100,
      weapons: [
        {
          weapon:'axe',
          damage:10
        },
        {
          weapon:'better axe',
          damage:20
        },
        {
          weapon:'best axe',
          damage:30
        }
        ],
      worldMap: [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,2,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
      ],
      playerRowIndex: 1,
      playerColumnIndex: 1,
      enemies: [
        {
          health: 0,
          attack: 100,         
        },
        {
          health: 100,
          attack: 100,         
        },
        {
          health: 100,
          attack: 100,         
        },
        {
          health: 100,
          attack: 100,         
        },
      ]
    }

    this.movePlayer = this.movePlayer.bind(this);
    this.distrubuteRandomlyOnMap = this.distrubuteRandomlyOnMap.bind(this);
  }

  componentWillMount(){
    let oldMap = this.state.worldMap;
    let newMap = [...oldMap];
    this.distrubuteRandomlyOnMap(newMap, 4, this.state.enemies.length, 5, this.state.weapons.length, 0);    
  } 

  distrubuteRandomlyOnMap(levelMap, targetValueOne, targetAmountOne, targetValueTwo, targetAmountTwo, valueToReplace) {
    console.log('REPLACING ' + valueToReplace + ' WITH ' + targetValueOne + 'AND' + targetValueTwo);
    let countDownOne = targetAmountOne;
    let countDownTwo = targetAmountTwo;
    var noOfHealthItems = 4;
    var levelMapRows = levelMap.length; 
    var levelMapColumns = levelMap[0].length;

    for (var i = 0; i < 100; i++) {
      let randomRowIndex =  Math.floor(Math.random()*levelMapRows) ;  
      let randomPositionIndex =  Math.floor(Math.random()*levelMapColumns) + 1;
      let enemies = this.state.enemies;
      let newEnemies = [...enemies];
      

      if (levelMap[randomRowIndex][randomPositionIndex] === valueToReplace) {
          
          if (countDownOne > 0) {
          levelMap[randomRowIndex][randomPositionIndex] = targetValueOne;
          newEnemies[countDownOne-1].position = [randomRowIndex,randomPositionIndex];
          this.setState({enemies:newEnemies});
          countDownOne--;
          } else if (countDownTwo > 0) {
          levelMap[randomRowIndex][randomPositionIndex] = targetValueTwo;
          countDownTwo--;  
          } else if (noOfHealthItems > 0 ) {
          levelMap[randomRowIndex][randomPositionIndex] = 3;
          noOfHealthItems--;  
          }
      }
    }
    this.setState({worldMap:levelMap});
  } 
  
  movePlayer(direction){

    var worldMap = this.state.worldMap;
    var playerRowIndex = this.state.playerRowIndex;
    var playerColumnIndex = this.state.playerColumnIndex;
    var newPlayerRowIndex;
    var newPlayerColumnIndex;
    var newWorldMap = [ ...worldMap ];
    let whatsAhead;

    if (direction === "right") {
      newPlayerRowIndex = playerRowIndex;
      newPlayerColumnIndex = playerColumnIndex + 1;
    } else if (direction === "left") {
      newPlayerRowIndex = playerRowIndex;
      newPlayerColumnIndex = playerColumnIndex + -1;
    } else if (direction === "up") {
      newPlayerRowIndex = playerRowIndex - 1;
      newPlayerColumnIndex = playerColumnIndex;
    } else if (direction === "down") {
      newPlayerRowIndex = playerRowIndex + 1;
      newPlayerColumnIndex = playerColumnIndex;
    }

    whatsAhead = worldMap[newPlayerRowIndex][newPlayerColumnIndex];
    console.log('whats ahead ' + whatsAhead);
    if (whatsAhead === 1) {
      // don't move
    } else if (whatsAhead === 4) {
      let enemies = this.state.enemies
      for (var i = 0; i < enemies.length; i++) {
        if(JSON.stringify(enemies[i]["position"])==JSON.stringify([newPlayerRowIndex,newPlayerColumnIndex]) && enemies[i]["health"]<1){
          console.log('the enemy ahead has index has no health' )
          newWorldMap[playerRowIndex][playerColumnIndex] = 0; // set starting cell to floor
          newWorldMap[newPlayerRowIndex][newPlayerColumnIndex] = 2; // set target cell to player    
        } else if (JSON.stringify(enemies[i]["position"])==JSON.stringify([newPlayerRowIndex,newPlayerColumnIndex]) && enemies[i]["health"]>0){
          console.log('deal damage');
        }
      }  
    }
    
    else {
      newWorldMap[playerRowIndex][playerColumnIndex] = 0; // set starting cell to floor
      newWorldMap[newPlayerRowIndex][newPlayerColumnIndex] = 2; // set target cell to player
      this.setState({ 
        worldMap: newWorldMap, // update the map 
        playerColumnIndex: newPlayerColumnIndex, // update horizontal player position
        playerRowIndex: newPlayerRowIndex
      })
    }

    if (whatsAhead === 3) { 
      this.setState({health: this.state.health + 10});
    } else if (whatsAhead === 5) {
      console.log('BOOO');
    }
  }

render() {
    return (
        <World  
              appstate={this.state}
              level={this.state.level}
              health={this.state.health}
              weapons={this.state.weapons}
              worldMap={this.state.worldMap}
              movePlayer={this.movePlayer}
              enemies={this.state.enemies}
        />     
    );
  }
}

export default AppContainer;
