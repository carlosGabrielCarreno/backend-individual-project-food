const { getRecipesByName, getDetailOfRecipe } = require('./recipes');
const { createRecipe, getDietTypes } = require('./typesOfDiets');

module.exports = {
  getRecipesByName,
  getDetailOfRecipe,
  createRecipe,
  getDietTypes,
};
