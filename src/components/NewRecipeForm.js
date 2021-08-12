import React, { useState } from 'react';
import axios from 'axios';
import '../styles.css';

const NewRecipeForm = () => {
    const initialState = {
        'name': '',
        'description': '',
        'ingredients': []
    };
    const [state, setState] = useState(initialState);

    const handleNewRecipe = async (e) => {
        e.preventDefault(); // prevent page reload
        // const response = await axios.post('http://127.0.0.1:8000/api/recipes/', state);
        console.log("Name", state.name);
        console.log("Description", state.description);
    };

    const handleFieldChange = (e, field) => {
        setState({ ...state, [field]: e.target.value });
    };

    return (
        <div className='new-recipe-form'>
            <h2>Enter the information for the new recipe:</h2>
            <form>
                <div className='form-unit'>
                    <label className='form-label'>Name</label>
                    <input className='form-input' type="text" placeholder="Enter recipe's name" onChange={(e) => handleFieldChange(e, 'name')} />
                </div>
                <div className='form-unit'>
                    <label className='form-label'>Description</label>
                    <input className='form-input' type="text" placeholder="Enter recipe's description" onChange={(e) => handleFieldChange(e, 'description')} />
                </div>
                <button onClick={handleNewRecipe}>Create</button>
            </form>
        </div>
    );
};

export default NewRecipeForm;