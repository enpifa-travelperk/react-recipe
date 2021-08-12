import axios from "axios";
import React, { useState } from "react";

const UPDATE_FIELDS = {
    id: 'id',
    ingredients: 'ingredients'
};

const UPDATE_URL = 'http://localhost:3000/api/recipes/';

const Update = () => {
    const initialState = {
        id: -1,
        ingredients: []
    };
    const [state, setState] = useState(initialState);

    const handleFieldChange = (e, field) => {
        if (field === UPDATE_FIELDS.ingredients) {
            setState({ ...state, [field]: e.target.value.split(', ') });
        }
        else setState({ ...state, [field]: e.target.value });
        console.log(state);
    };

    const handleUpdate = e => {
        e.preventDefault();
        if (state.id === -1) console.log("Please, insert the recipe id.");
        // else if (state.ingredients.length === 0) console.log("Please, add some ingredients.");
        else console.log("New ingredients--", state);
    };

    const requestUpdateRecipe = async (id, ingredients) => {
        const url = `${UPDATE_URL}${id.toString()}`;
        const payload = { ingredients: ingredients };
        const response = await axios.patch(url, payload);
        console.log(response);
    }; 

    return (
        <div className='new-recipe-form'>
            <h2>Enter the recipe id and the new ingredients:</h2>
            <form>
                <div className='form-unit'>
                    <label className='form-label'>Recipe ID</label>
                    <input className='form-input' type="text" placeholder="Enter recipe's id" onChange={(e) => handleFieldChange(e, UPDATE_FIELDS.id)} />
                </div>
                <div className='form-unit'>
                    <label className='form-label'>New Ingredients (separate them by a comma+space)</label>
                    <input className='form-input' type="text" placeholder="Enter recipe's ingredients" onChange={(e) => handleFieldChange(e, UPDATE_FIELDS.ingredients)} />
                </div>
                <button onClick={handleUpdate}>Update</button>
            </form>
        </div>
    );
};

export default Update;