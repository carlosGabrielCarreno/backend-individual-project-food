const { Recipe, TypeOfDiet } = require('../db');

const getRecipesOfDb = async () => {
  try {
    const recipes = await Recipe.findAll({
      attributes: [
        'id',
        'title',
        'summary',
        'image',
        'vegetarian',
        'vegan',
        'glutenFree',
        'healthScore',
        'analyzedInstructions',
        'cuisines',
        'dishTypes',
      ],
      include: TypeOfDiet,
    });

    if (recipes) {
      return recipes;
    } else {
      throw new Error('recipes not found');
    }
  } catch (error) {
    return new Error(error);
  }
};

module.exports = { getRecipesOfDb };
