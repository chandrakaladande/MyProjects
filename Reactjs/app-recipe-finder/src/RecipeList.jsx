
import React from 'react';
import './Styles/RecipeList.css'

function RecipeList({ recipes }) {
  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.title} />
          <ul>
            {recipe.usedIngredients.map(ingredient => (
              <li key={ingredient.id}>{ingredient.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
