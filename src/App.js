import React, { Component } from 'react';
import RecipeList from './RecipeList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>My Recipe Book</h1>
        </header>
        <RecipeList />
      </div>
    )
  }
}

export default App;
