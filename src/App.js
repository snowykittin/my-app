import React from 'react';
import './App.css';
import RecipeSearch from "./components/RecipeSearch";
import ReactAnimation from "./components/ReactAnimation";
import Map from "./components/Map/Map";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
//map work pls
import Inventory from "./components/inventory/Inventory";


export default class App extends React.Component{
  state = {
    pages: [<RecipeSearch />, <ReactAnimation />, <Map />, <Inventory />, <MusicPlayer />],
    curPage: 0
  };
  
  render(){
    return (
      <div className="App">
        <h1>N320 React Projects</h1>
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
          <button onClick={() => {
            this.swapProject(4);
            }}>
              Music Player
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
