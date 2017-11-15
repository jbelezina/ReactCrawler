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
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,2,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,3,0,0,0,3,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,3,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],

      ],
      playerRowIndex: 1,
      playerColumnIndex: 1
    }

    this.movePlayer = this.movePlayer.bind(this);
    this.dealWithWhatsAhead = this.dealWithWhatsAhead.bind(this);
  }

  dealWithWhatsAhead(valueAhead) {
    if (valueAhead === 3) {
      this.setState({health: this.state.health + 10});
    } else if (valueAhead === 5) {
      this.setState({weapon:'bigger axe'});
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
              weapon={this.state.weapon}
              worldMap={this.state.worldMap}
              movePlayer={this.movePlayer}
        />     
    );
  }
}

export default AppContainer;
