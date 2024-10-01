const pantry = ['flour', 'sugar', 'butter', 'eggs', 'baking powder', 'milk', 'vanilla extract'];

const recipe1 = ['flour', 'milk', 'yeast', 'sugar', 'butter'];
const recipe2 = ['eggs', 'milk', 'cheese', 'ham'];
const recipe3 = ['flour', 'sugar', 'butter', 'eggs', 'baking powder'];


/* LEVEL ONE
Write a function that takes in a recipe and outputs the ingredients the pantry is missing for that recipe.

getMissingIngredients(recipe1) --> ["yeast"]
getMissingIngredients(recipe2) --> ["cheese", "ham"]
getMissingIngredients(recipe3) --> []
*/


/* Level TWO
Refactor your function so that instead of returning an array of missing ingredients, it returns a string stating what you need to buy.  

getMissingIngredients(recipe1) --> "You need to buy: yeast."
getMissingIngredients(recipe2) --> "You need to buy: cheese, ham."
getMissingIngredients(recipe3) --> "You have all the ingredients for this recipe."
*/
