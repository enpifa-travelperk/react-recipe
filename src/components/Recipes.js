import React from 'react';
import NewRecipeForm from './NewRecipeForm';
import RecipeList from './RecipeList';
import '../styles.css';

const Recipes = () => {
    return (
        <div className='recipes'>
            <h1>Recipes</h1>
            <RecipeList />
            <NewRecipeForm />
        </div>
    );
}

export default Recipes;