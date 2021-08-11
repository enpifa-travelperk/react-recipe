import React from 'react';
import './Recipes.css';

const Recipe = (props) => {
    const {data} = props;
    const {name, description, ingredients} = data;

    return (
        <div className='single-recipe'>
            <h3>Name: {name}</h3>
            <h4>Description: {description}</h4>
            <h4>Ingredients:</h4>
            {ingredients.map(ingredient => <li>{ingredient.name}</li>)}
        </div>
    );
};

export default Recipe;