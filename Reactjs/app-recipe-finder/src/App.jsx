import React, { useState } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import RecipeList from './RecipeList';
import './App.css'

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = 'YOUR_API_KEY';
  const API_URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`;

  const searchRecipes = async (query) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${API_URL}&query=${query}`);
      setRecipes(response.data.results);
    } catch (error) {
      setError('An error occurred while fetching recipes. Please try again later.');
    }

    setLoading(false);
  };

  return (
    <div>
      <h1>Recipe Finder</h1>
      <SearchForm onSearch={searchRecipes} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
