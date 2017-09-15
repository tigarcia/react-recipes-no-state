import React, { Component } from 'react';
import RecipeList from './RecipeList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h2><a>Recipe App</a></h2>
          <nav>
            <li>
              <a onClick={() => this.setState({showForm: true})}>
                New Recipe
              </a>
            </li>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Contact Us</a></li>
          </nav>
        </header>
        <RecipeList />
      </div>
    )
  }
}

export default App;
