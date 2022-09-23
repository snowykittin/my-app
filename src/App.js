import React from 'react';
import './App.css';
import RecipeSearch from "./components/RecipeSearch";


export default class App extends React.Component{
  state = {
    pages: [<RecipeSearch />],
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
        </div>
        {this.state.pages[this.state.curPage]}
      </div>
    );
  }
  
  swapProject(projectIndex){
    this.setState({ curPage: projectIndex});
  }
}
