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
        [1,2,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,3,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,3,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
      ],
      playerRowIndex: 1,
      playerColumnIndex: 1,
      enemies: [
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
        {
          health: 100,
          attack: 100,         
        },
      ]
    }

    this.movePlayer = this.movePlayer.bind(this);
    this.dealWithWhatsAhead = this.dealWithWhatsAhead.bind(this);
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
          }
      }
    }
    this.setState({worldMap:levelMap});
  } 

  dealWithWhatsAhead(valueAhead) {
    if (valueAhead === 3) { 
      this.setState({health: this.state.health + 10});
    } else if (valueAhead === 5) {
      console.log('BOOO');
    } else if (valueAhead === 4) {
      let oldEnemies = this.state.enemies;
      let newEnemies = [...oldEnemies];
      
      this.setState({enemies:newEnemies});
    }
  }
  
  movePlayer(direction){

    var worldMap = this.state.worldMap;
    var playerRowIndex = this.state.playerRowIndex;
    var playerColumnIndex = this.state.playerColumnIndex;
    var newWorldMap = [ ...worldMap ];

    if (direction === "right" && worldMap[playerRowIndex][playerColumnIndex + 1] !== 1) { // if right and no wall ahead
      let newPlayerColumnIndex = playerColumnIndex +1;
      this.dealWithWhatsAhead(worldMap[playerRowIndex][newPlayerColumnIndex]);// react to what's ahead 
      newWorldMap[playerRowIndex][playerColumnIndex] = 0; // set starting cell to floor
      newWorldMap[playerRowIndex][newPlayerColumnIndex] = 2; // set target cell to player
      this.setState({ 
        worldMap: newWorldMap, // update the map 
        playerColumnIndex: newPlayerColumnIndex // update horizontal player position
      })
      
    } else if (direction === "left" && worldMap[playerRowIndex][playerColumnIndex - 1] !== 1) { // if left and no wall ahead
      let newPlayerColumnIndex = playerColumnIndex -1;
      this.dealWithWhatsAhead(worldMap[playerRowIndex][newPlayerColumnIndex]);  // react to what's ahead
      newWorldMap[playerRowIndex][playerColumnIndex] = 0; // set starting cell to floor
      newWorldMap[playerRowIndex][newPlayerColumnIndex] = 2; // set target cell to player
      this.setState({
        worldMap: newWorldMap,
        playerColumnIndex: newPlayerColumnIndex
      })
    } else if (direction === "up" && worldMap[playerRowIndex -1][playerColumnIndex] !== 1) {
      let newPlayerRowIndex = playerRowIndex -1;
      this.dealWithWhatsAhead(worldMap[newPlayerRowIndex][playerColumnIndex])  // react to what's ahead
      newWorldMap[playerRowIndex][playerColumnIndex] = 0; // set starting cell to floor
      newWorldMap[newPlayerRowIndex][playerColumnIndex] = 2; // set target cell to player
      this.setState({
        worldMap: newWorldMap,
        playerRowIndex: newPlayerRowIndex
      }) 
    } else if (direction === "down" && worldMap[playerRowIndex +1][playerColumnIndex] !== 1) {
      let newPlayerRowIndex = playerRowIndex +1;
      this.dealWithWhatsAhead(worldMap[newPlayerRowIndex][playerColumnIndex]) // react to what's ahead
      newWorldMap[playerRowIndex][playerColumnIndex] = 0; // set starting cell to floor
      newWorldMap[newPlayerRowIndex][playerColumnIndex] = 2; // set target cell to player
      this.setState({
        worldMap: newWorldMap,
        playerRowIndex: newPlayerRowIndex
      })
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
