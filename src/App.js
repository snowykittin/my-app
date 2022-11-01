import React from 'react';
import './App.css';
import RecipeSearch from "./components/RecipeSearch";
import ReactAnimation from "./components/ReactAnimation";
import Map from "./components/map/Map";
import Inventory from "./components/inventory/Inventory";


export default class App extends React.Component{
  state = {
    pages: [<RecipeSearch />, <ReactAnimation />, <Map />, <Inventory />],
    curPage: 0
  };
  
  render(){
    return (
      <div className="App">
        <h1>Welcome to React</h1>
        <div>
          <button onClick={() => {
            this.swapProject(0);
            }}>
              Recipe Search
          </button>
          <button onClick={() => {
            this.swapProject(1);
            }}>
              React Animation
          </button>
          <button onClick={() => {
            this.swapProject(2);
            }}>
              Map
          </button>
          <button onClick={() => {
            this.swapProject(3);
            }}>
              Inventory Bag
          </button>
        </div>
        {this.state.pages[this.state.curPage]}
      </div>
    );
  }
  
  swapProject(projectIndex){
    this.setState({ curPage: projectIndex});
  }
}
