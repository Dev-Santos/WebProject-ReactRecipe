import React from 'react';
import style from '../css/recipe.module.css';


const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol><b>Recipe:</b>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories: {calories.toFixed(0)}</p>
            <img className={style.image} src={image} alt="" />
        </div>
    );
};

export default Recipe;