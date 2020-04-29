import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import CheckList from './CheckList';

import '../css/homepage.css';

const HomePage = () => {
    const APP_ID = "d66e2a9d";
    const APP_KEY = "7cc5b4178a5c8cd7de97819f02da5f85";
  
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken');
  
    useEffect( () => {
      getRecipes();
    }, [query]);
  
    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
    //   console.log(data);
      setRecipes(data.hits);
    };
  
    const updateSearch = e => {
      setSearch(e.target.value);
    };
  
    const getSearch = e => {
      e.preventDefault();
      setQuery(search);
      setSearch('');
    };
  
    return (    
      <div className="HomePage">
        <div className="container">   
            <div className="row">  
                <div className="recipeSection">
                    <form onSubmit={getSearch} className="search-form">
                        <input placeholder="Search for any recipe..." className="search-bar" type="text" value={search} onChange={updateSearch} />
                        <button className="search-button" type="submit">Search</button>
                    </form>     
                    <div className="recipes">
                    {recipes.map(recipe => (
                        <Recipe 
                        key={recipe.recipe.label}
                        title={recipe.recipe.label} 
                        calories={recipe.recipe.calories} 
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients}
                        />
                    ))}
                    </div>
                </div>
                <div className="checkListSection">
                    <CheckList />
                </div>

            </div>  
        </div>
      </div> 
    );
  };

export default HomePage;