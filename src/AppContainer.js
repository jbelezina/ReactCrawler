import React, { Component } from 'react';
import World from './World';


class AppContainer extends Component {
  constructor(){
    super();
    this.state = {
      level:1,
      health:100,
      weapon:'axe',
      worldMap: [
        [1,1,1,1,1,1,1,1,1,1],
        [1,2,0,0,1,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1]
      ],
      playerRowIndex: 1,
      playerColumnIndex: 1
    }

    this.movePlayer = this.movePlayer.bind(this);
  }

  movePlayer(direction){

    var worldMap = this.state.worldMap;
    var playerRowIndex = this.state.playerRowIndex;
    var playerColumnIndex = this.state.playerColumnIndex;
    var newWorldMap = [ ...worldMap ];

    if (direction === "right" && worldMap[playerRowIndex][playerColumnIndex + 1] !== 1) { // if right and no wall ahead
      let newPlayerColumnIndex = playerColumnIndex +1;
      newWorldMap[playerRowIndex][playerColumnIndex] = 0; // set starting cell to floor
      newWorldMap[playerRowIndex][newPlayerColumnIndex] = 2; // set target cell to player
      this.setState({
        worldMap: newWorldMap,
        playerColumnIndex: newPlayerColumnIndex
      })
    } else if (direction === "left" && worldMap[playerRowIndex][playerColumnIndex - 1] !== 1) { // if left and no wall ahead
      let newPlayerColumnIndex = playerColumnIndex -1;
      newWorldMap[playerRowIndex][playerColumnIndex] = 0; // set starting cell to floor
      newWorldMap[playerRowIndex][newPlayerColumnIndex] = 2; // set target cell to player
      this.setState({
        worldMap: newWorldMap,
        playerColumnIndex: newPlayerColumnIndex
      })
    } else if (direction === "up" && worldMap[playerRowIndex -1][playerColumnIndex] !== 1) {
      let newPlayerRowIndex = playerRowIndex -1;
      newWorldMap[playerRowIndex][playerColumnIndex] = 0; // set starting cell to floor
      newWorldMap[newPlayerRowIndex][playerColumnIndex] = 2; // set target cell to player
      this.setState({
        worldMap: newWorldMap,
        playerRowIndex: newPlayerRowIndex
      }) 
    } else if (direction === "down" && worldMap[playerRowIndex +1][playerColumnIndex] !== 1) {
      let newPlayerRowIndex = playerRowIndex +1;
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
              weapon={this.state.weapon}
              worldMap={this.state.worldMap}
              movePlayer={this.movePlayer}
        />     
    );
  }
}

export default AppContainer;
