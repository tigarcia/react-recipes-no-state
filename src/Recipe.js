import React, {Component} from 'react';
import './Recipe.css';

class Recipe extends Component {
  render() {
    const {instructions, title, ingredients, img} = this.props;
    const ingredientList = ingredients.map((ing, index) => (
      <li key={index}>{ing}</li>
    ));
    return (
      <div className="recipe-card">
        <div className="recipe-card-img">
          <img src={img} alt={title} />
        </div>
        <div className="recipe-card-content">
          <h3 className="recipe-title">{title}</h3>
          <h4>Ingredients:</h4>
          <ul>
            {ingredientList}
          </ul>
          <h4>Instructions:</h4>
          <p>
            {instructions}
          </p>
        </div>
      </div>
    );
  }
}

export default Recipe;
