import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Imported Components
// import Recipe from "./components/Recipe";
import AppNavbar from "./components/AppNavbar";
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import MyRecipes from './components/MyRecipes';
import AddRecipe from './components/AddRecipe';
import FoodNews from './components/FoodNews';
import FoodTrends from './components/FoodTrends';
import Login from './components/Login';

//Imported CSS Files
import './App.css';

class App extends React.Component {

  render() {

    return (    
      <div>
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

      </div>         
    );
  }
}

export default App;
