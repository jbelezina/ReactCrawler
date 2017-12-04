import React, { Component } from 'react';
import World from './World';
import './World.css'
import StatsBar from './StatsBar';


class AppContainer extends Component {
  constructor(){
    super();
    this.state = {
      level:1,
      health:20,
      xp: 2,
      weapon: 'wooden club',
      damage: 10,
      gameOver: false,
      weapons: [
        {
          weapon:'machete',
          damage:20
        },
        {
          weapon:'sword',
          damage: 40
        },
        {
          weapon:'battle axe',
          damage:60
        }
        ],
      isMapCovered: true,
      worldMap: [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,2,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
      ],
      playerRowIndex: 1,
      playerColumnIndex: 1,
      enemies: [
        {
          health: 100,
          attack: 10,         
        },
        {
          health: 100,
          attack: 20,         
        },
        {
          health: 100,
          attack: 30,         
        },
        {
          health: 100,
          attack: 40,         
        },
      ]
    }

    this.movePlayer = this.movePlayer.bind(this);
    this.distrubuteRandomlyOnMap = this.distrubuteRandomlyOnMap.bind(this);
    this.coverMap = this.coverMap.bind(this);
    this.toggleDarkness = this.toggleDarkness.bind(this); 
    this.backToDefaults = this.backToDefaults.bind(this);
  }

  backToDefaults(){
    this.setState({
      level:1,
      health:20,
      xp: 2,
      weapon: 'wooden club',
      damage: 10,
      isMapCovered: true,
      worldMap: [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,2,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
      ],
      playerRowIndex: 1,
      playerColumnIndex: 1,
      enemies: [
        {
          health: 100,
          attack: 10,         
        },
        {
          health: 100,
          attack: 20,         
        },
        {
          health: 100,
          attack: 30,         
        },
        {
          health: 100,
          attack: 40,         
        },
      ]
    });
    this.setState({gameOver:false});
    let oldMap = this.state.worldMap;
    let newMap = [...oldMap];
    this.distrubuteRandomlyOnMap(newMap, 4, this.state.enemies.length, 5, this.state.weapons.length, 0);    
    if(this.state.isMapCovered){
      this.coverMap();
    }
  }



  toggleDarkness(){
    let isMapCovered = this.state.isMapCovered; 
    this.setState({isMapCovered: !this.state.isMapCovered});
    if (isMapCovered) {
      
      this.setState({coveredMap: this.state.worldMap});
    } else {
      console.log('map is not covered')
      this.coverMap('ToggleDarkness');
      console.log('now it is')
    }
  }

  componentWillMount(){
    let oldMap = this.state.worldMap;
    let newMap = [...oldMap];
    this.distrubuteRandomlyOnMap(newMap, 4, this.state.enemies.length, 5, this.state.weapons.length, 0);    
    if(this.state.isMapCovered){
      this.coverMap();
    }
  } 

  coverMap(source){

    let shouldNotBeCovered = this.state.worldMap;
    let newMap = [].concat(shouldNotBeCovered);
    let playerColumn;
    let playerRow;

    newMap.map((row,rowIndex)=>{
      if (row.indexOf(2) !== -1) {
        row.map((item,itemIndex)=>{
          if (item === 2) {
            playerRow = rowIndex; 
            playerColumn = itemIndex;
          }
          return item;
        }) 
      }
      return row;
    });

    let anotherNewMap = [].concat(shouldNotBeCovered);

    let result = anotherNewMap.map((row,rowIndex)=>{
        let newRow = []
        row.forEach((item, itemIndex)=>{
          if((rowIndex === playerRow) && ((itemIndex > playerColumn +3) || (itemIndex < playerColumn -3))) {
            newRow.push(9); 
            } else if((rowIndex === playerRow + 1 || rowIndex === playerRow - 1 ) && ((itemIndex > playerColumn +2) || (itemIndex < playerColumn -2))) {
              newRow.push(9);
            } else if((rowIndex === playerRow + 2 || rowIndex === playerRow - 2 ) && ((itemIndex > playerColumn +1) || (itemIndex < playerColumn -1))) {
              newRow.push(9);
            } else if((rowIndex === playerRow + 3 || rowIndex === playerRow - 3 ) && ((itemIndex > playerColumn) || (itemIndex < playerColumn))) {
              newRow.push(9);
            } else if((rowIndex >= playerRow + 4 || rowIndex <= playerRow - 4 )){
              newRow.push(9);
            } else {
              newRow.push(shouldNotBeCovered[rowIndex][itemIndex]);              
            }
          });
        return newRow;
    });
    if(this.state.isMapCovered || source === 'ToggleDarkness'){
    this.setState({coveredMap:result});
    }
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
      let weapons = this.state.weapons;
      let newWeapons = [...weapons];
      newWeapons.reverse();

      if (levelMap[randomRowIndex][randomPositionIndex] === valueToReplace) {
          
          if (countDownOne > 0) {
          levelMap[randomRowIndex][randomPositionIndex] = targetValueOne;
          newEnemies[countDownOne-1].position = [randomRowIndex,randomPositionIndex];
          this.setState({enemies:newEnemies});
          countDownOne--;
          } else if (countDownTwo > 0) {
          levelMap[randomRowIndex][randomPositionIndex] = targetValueTwo;
          newWeapons[countDownTwo-1].position = [randomRowIndex, randomPositionIndex];
          this.setState({weapons:newWeapons});
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
    console.log('shouldn be covered at all' + worldMap);
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
    if (whatsAhead === 1) { // if wall
      // don't move
    } else if (whatsAhead === 4) { // if enemy
      let enemies = this.state.enemies
      for (var j = 0; j < enemies.length; j++) {
        if(JSON.stringify(enemies[j]["position"])===JSON.stringify([newPlayerRowIndex,newPlayerColumnIndex]) && enemies[j]["health"]<0){
          console.log('the enemy ahead has no health so I can tread on him' )
          newWorldMap[playerRowIndex][playerColumnIndex] = 0; // set starting cell to floor
          newWorldMap[newPlayerRowIndex][newPlayerColumnIndex] = 2; // set target cell to player
          this.setState({ 
            worldMap: newWorldMap, // update the map 
            playerColumnIndex: newPlayerColumnIndex, // update horizontal player position
            playerRowIndex: newPlayerRowIndex
          })
          this.coverMap();    
        } else if (JSON.stringify(enemies[j]["position"])===JSON.stringify([newPlayerRowIndex,newPlayerColumnIndex]) && enemies[j]["health"]>0){
          enemies[j]["health"] -= (Math.round(Math.random()*(this.state.xp * this.state.weapons[0]["damage"]))+1); // calculate damage
          let playerHealth = this.state.health;
          let enemyDamage = Math.round((Math.random() * enemies[j]["attack"])+1);
          let newPlayerHealth = playerHealth - enemyDamage;
          if(newPlayerHealth > 0) {
            this.setState({enemies:enemies});
            this.setState({health:newPlayerHealth});   
          } else {
            this.setState({gameOver:true});
            setTimeout(
              function() {
                this.backToDefaults();                
              }.bind(this), 3000);
          }
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
      this.coverMap();
    }

    if (whatsAhead === 3) { 
      this.setState({health: this.state.health + 40});
    } else if (whatsAhead === 5) {
      let weapons = this.state.weapons;
      for (var i = 0; i < weapons.length; i++) {
        if (JSON.stringify(weapons[i]["position"])===JSON.stringify([newPlayerRowIndex,newPlayerColumnIndex])) {
        let newWeapon = weapons[i]["weapon"]
          this.setState({weapon:newWeapon});
        let oldDamage = this.state.damage;
        let newDamage = oldDamage + weapons[i]["damage"];  
        this.setState({damage: newDamage});
      }
    }
    }

    
  }

render() {
    
  
    

    return (
        <div>  
        <StatsBar 
              level={this.state.level}
              health={this.state.health}
              weapons={this.state.weapons}
              damage={this.state.damage}
              toggleDarkness={this.toggleDarkness}
        />
        <World className="world" 
              gameOver={this.state.gameOver}
              appstate={this.state}
              coveredMap={this.state.coveredMap}
              movePlayer={this.movePlayer}
              enemies={this.state.enemies}
              weapon={this.state.weapon}
        />
        </div>     
    );
  }
}

export default AppContainer;
