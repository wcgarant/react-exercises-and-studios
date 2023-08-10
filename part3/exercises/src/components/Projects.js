import data from "../data.json";
import { useState } from 'react';

export default function MyProjects() {
    const [index, setIndex] = useState(0);
    const recipes = data.projects;
    let recipe = recipes[index];

    function handleClick() {
        if (index < data.projects.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }
    return (
        <div>
            <button onClick={handleClick}>Next</button>
            <div>
                <h1>{recipe.name}</h1>
                <img src={recipe.photoUrl} alt={recipe.alt}></img>
                <h2>Ingredients:</h2>
                <ul>
                    <li>{recipe.ingredients[0]}</li>
                    <li>{recipe.ingredients[1]}</li>
                    <li>{recipe.ingredients[2]}</li>
                    <li>{recipe.ingredients[3]}</li>
                    <li>{recipe.ingredients[4]}</li>
                </ul>

            </div>
        </div>
    )
}