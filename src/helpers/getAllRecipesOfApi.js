const { getRecipesByApi } = require('./getRecipesByApi');
//this function get 100 recipes:
const getAllRecipesOfApi = async () => {
  const newRecipes = await getRecipesByApi();
  const recipes = newRecipes.map((recipe) => {
    const stepsData = recipe.analyzedInstructions[0];
    const { steps } = stepsData ? stepsData : { steps: 'not steps' };
    return {
      /* id: recipe.id.toString(), */
      cuisines: recipe.cuisines.length ? recipe.cuisines : ['not cuisines'],
      dishTypes: recipe.dishTypes.length ? recipe.dishTypes : ['not dishTypes'],
      title: recipe.title,
      image: recipe.image,
      healthScore: recipe.healthScore,
      vegetarian: !recipe.vegetarian ? false : true,
      vegan: !recipe.vegan ? false : true,
      glutenFree: !recipe.glutenFree ? false : true,
      summary: recipe.summary,
      diets: recipe.diets ? recipe.diets : ['not diets'],
      analyzedInstructions: JSON.stringify(steps),
    };
  });
  console.table(recipes);
  return recipes;
};

module.exports = {
  getAllRecipesOfApi,
};
