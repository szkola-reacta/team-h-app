import React, { useState, useEffect} from 'react';

const RecipeList = () => {
    const RecipeApi = '/public/data.json';
    const [recpipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes();
    });
    const getRecipes = () => {
        fetch(RecipeApi)
        .then(res => console.log(res))
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div>
            Dashboard
        </div>
    )
}

export default RecipeList;
