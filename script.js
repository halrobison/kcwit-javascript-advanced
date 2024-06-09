import { fetchInitialRecipes } from "./utils.js";
import { addRecipe } from "./utils.js";

const recipesContainer = document.getElementById('recipes');
const addRecipeButton = document.getElementById('addRecipeButton'); 

function displayRecipes(recipes) {
    recipesContainer.innerHTML = '';

    recipes.forEach(function(recipe) {
        const recipeElement = document.createElement('div');
        recipeElement.innerHTML = `
            <h3></h3>
            ${drinkName}
            <p>Ingredients: ${ingredients.join(",")}</p>
            <p>Instructions: ${instructions}</p>
            `;
        recipesContainer.appendChild(recipeElement);
    })
};

async function handleAddRecipe() {
    const drinkName = prompt('Add a name for your new drink:');
    const ingredients = prompt('Enter ingredients (comma separated):').split(',');
    const instructions = prompt('Add instructions for making your drink:');
    
    try {
        const newRecipe = { drinkName, ingredients, instructions };
        newRecipes.push(newRecipe);
        displayRecipes();
    } catch (error) {
        console.error('Error adding recipe:', error);
    }
};
addRecipeButton.addEventListener('click', handleAddRecipe);
console.log("addRecipeButton", addRecipeButton)

let newRecipes = [];

let initialRecipes = []; 

async function init() {
    try {
        initialRecipes = await fetchInitialRecipes();
        displayRecipes(initialRecipes);
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
};
init();