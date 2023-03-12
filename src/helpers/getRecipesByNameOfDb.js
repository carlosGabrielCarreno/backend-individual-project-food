const { Recipe, TypeOfDiet } = require('../db');
const { getAllRecipesOfApi } = require('./getAllRecipesOfApi');
const { getRecipesOfDb } = require('./getRecipesOfDb');

const getRecipesByNameOfDb = async (name) => {
  const recipes = await getRecipesOfDb();
  return recipes.filter((recipe) => {
    let reg = new RegExp(name, 'gi');
    let result = reg.test(recipe.title);
    if (result) {
      return true;
    } else {
      return false;
    }
  });
};

module.exports = {
  getRecipesByNameOfDb,
};
