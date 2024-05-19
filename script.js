// script.js
const addRecipeButton = document.getElementById('addRecipe');
const modal = document.getElementById('add-recipe-modal');
const closeButton = modal.querySelector('.close');
const recipeForm = document.getElementById('recipe-form');
const instructionsSection = document.getElementById('cooking-instructions');

// Example data (replace with your actual data)
const recipes = []; // Initialize an empty array to store recipes

addRecipeButton.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

recipeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Get form data (recipe title, ingredients, instructions)
    const title = document.getElementById('recipe-title').value;
    const ingredients = document.getElementById('recipe-ingredients').value;
    const instructions = document.getElementById('recipe-instructions').value;

    // Create a new recipe object
    const newRecipe = {
        title,
        ingredients,
        instructions,
    };

    // Add the new recipe to the array
    recipes.push(newRecipe);

    // Display the new recipe card dynamically (you can customize this part)
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');
    recipeCard.innerHTML = `
        <h2>${title}</h2>
        <p>Ingredients: ${ingredients}</p>
        <button class="view-details">View Details</button>
        <button class="edit-recipe">Edit</button>
        <button class="delete-recipe">Delete</button>
    `;

    recipeCard.querySelector('.view-details').addEventListener('click', () => {
        instructionsSection.querySelector('#selected-recipe-instructions').textContent = instructions;
    });

    recipeCard.querySelector('.edit-recipe').addEventListener('click', () => {
        document.getElementById('recipe-title').value = title;
        document.getElementById('recipe-ingredients').value = ingredients;
        document.getElementById('recipe-instructions').value = instructions;
        modal.style.display = 'flex';

        recipes.splice(recipes.indexOf(newRecipe), 1); // Remove the old recipe
    });

    recipeCard.querySelector('.delete-recipe').addEventListener('click', () => {
        document.querySelector('main').removeChild(recipeCard);
        recipes.splice(recipes.indexOf(newRecipe), 1);
    });

    document.querySelector('main').appendChild(recipeCard);

    // Close the modal
    modal.style.display = 'none';

    // Clear the form fields
    document.getElementById('recipe-title').value = '';
    document.getElementById('recipe-ingredients').value = '';
    document.getElementById('recipe-instructions').value = '';
});
