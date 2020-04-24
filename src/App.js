import React,{useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Imported Components
import Recipe from "./components/Recipe";
import AppNavbar from "./components/AppNavbar";
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import MyRecipes from './components/MyRecipes';
import AddRecipe from './components/AddRecipe';
import FoodNews from './components/FoodNews';
import FoodTrends from './components/FoodTrends';
import Login from './components/Login';

//Imported CSS Files
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//Imported Bootstrap elements
// import {Container} from 'reactstrap';

const App = () => {
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
    console.log(data);
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
    <div className="App">
      <Router>

        <AppNavbar/>

        <Switch>

          <Route path={["/home", "/", ""]} exact component={HomePage}/>

          <Route path={"/foodnews"} exact component={FoodNews}/>

          <Route path={"/foodtrends"} exact component={FoodTrends}/>

          <Route path={"/myrecipes"} exact component={MyRecipes}/>

          <Route path={"/addRecipe"} exact component={AddRecipe}/>

          <Route path={"/login"} exact component={Login}/>

          {/* <Route path={"/signup"} exact component={HomePage}/> */}

        </Switch>
        
        <Footer />

      </Router>
      
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
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
        ))};
      </div>
    </div>
  );
};

export default App;
