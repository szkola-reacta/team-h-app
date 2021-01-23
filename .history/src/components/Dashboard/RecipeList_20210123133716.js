import React, { useState, useEffect} from 'react';

const RecipeList = () => {
    const RecipeApi = '/data.json';
    const [recpipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes();
    });
    const getRecipes = () => {
        fetch(RecipeApi)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setRecipes(data.recipes);
        } )
        .catch(error => console.log(error))
    }
    return (
        <div>
            Dashboard
        </div>
    )
}

export default RecipeList;
