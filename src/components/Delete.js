import axios from "axios";
import React, { useState } from "react";

const DELETE_URL = 'http://localhost:3000/api/recipes/';

const Delete = () => {
    const [state, setState] = useState(-1);

    const handleFieldChange = (e, _) => {
        setState(e.target.value);
        console.log(state);
    };

    const handleDelete = e => {
        e.preventDefault();
        if (state === -1|| !state.match(/^\d+$/)) console.log("Please, insert a valid recipe id.");
        // else if (state.ingredients.length === 0) console.log("Please, add some ingredients.");
        else console.log("Recipe deleted--", state);
    };

    const requestDeleteRecipe = async (id, ingredients) => {
        const url = `${DELETE_URL}${id.toString()}`;
        const payload = { ingredients: ingredients };
        const response = await axios.patch(url, payload);
        console.log(response);
        // TODO: push/redirect to List
    }; 

    return (
        <div className='new-recipe-form'>
            <h2>Enter the recipe id to delete:</h2>
            <form>
                <div className='form-unit'>
                    <label className='form-label'>Recipe ID</label>
                    <input className='form-input' type="text" placeholder="Enter recipe's id" onChange={(e) => handleFieldChange(e, 'id')} />
                </div>
                <button onClick={handleDelete}>Delete</button>
            </form>
        </div>
    );
};

export default Delete;