
const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1';

export async function fetchInitialRecipes() {
    try {
        const response = await fetch(`${apiUrl}/search.php?s=margarita`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        if (!data.drinks) {
            throw new Error('No recipes found');
        }

        const drinks = data.drinks.slice(0, 3);

        const recipes = drinks.map(drink => ({
            name: drink.strDrink,
            ingredients: [
                drink.strIngredient1,
                drink.strIngredient2,
                drink.strIngredient3,
                // Add more ingredients as needed
            ].filter(Boolean), // Remove any empty values
            instructions: drink.strInstructions,
        }));
    return recipes; 

    } catch (error) {
        throw new Error('Error fetching recipes:', error);
    }
}

export async function addRecipe(recipe) {
try {
  // Logic to add the recipe to your database/API would go here
  console.log('Adding recipe:', recipe);
  // For now, just returning the recipe as if it was added successfully
    return recipe;
    } catch (error) {
        throw new Error('Error adding recipe:', error);
    }
}