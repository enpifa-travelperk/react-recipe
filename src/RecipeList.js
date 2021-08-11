import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Recipe from './Recipe';
import './Recipes.css';

const mockRecipeWithoutIngredients = {
    "name": "Pizza",
    "description": "Frozen pizza from Walmart",
    "ingredients": []
};

const mockRecipeWithIngredients = {
    "name": "Penne a la rabiata",
    "description": "Italian spicy pasta",
    "ingredients": [
        {"name": "Tomato sauce"},
        {"name": "Penne"},
        {"name": "Parmesan"},
    ]
};

const mockGetRecipes = {
    data: [mockRecipeWithIngredients, mockRecipeWithoutIngredients]
};

const RecipeList = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        function getRecipes() {
            // const recipes = await axios.get('http://127.0.0.1:8000/api/recipes/');
            console.log("RECIPES", mockGetRecipes.data);
            setState(mockGetRecipes.data)
        }
        getRecipes();
        // setState(recipes);
        console.log("STATE", state);
    }, []);

    // const recipes = state.map(recipe => <Recipe data={recipe} />);

    return (
        <div className='recipes-list'>
            <h2>List of all the recipes:</h2>
            {state.map(recipe => <Recipe data={recipe} />)}
        </div>
    );
}

export default RecipeList;