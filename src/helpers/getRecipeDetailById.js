const { Op } = require('sequelize');
const { Recipe, TypeOfDiet } = require('../db');

const getRecipeDetailById = async (id) => {
  try {
    const recipe = await Recipe.findOne({
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
      where: {
        id: {
          [Op.eq]: id,
        },
      },
      include: TypeOfDiet,
      through: { attributes: [] },
    });
    // console.log(recipe);
    // return recipe;

    if (recipe) {
      //parseo los datos, para que el front reciba la data mas limpia y facil de manejar!
      const [typeDiets] = recipe.typeOfDiets;
      let diets;
      if (typeDiets?.diets) {
        diets = typeDiets.diets;
      } else {
        diets = ['not diets'];
      }
      const stepsArray = JSON.parse(recipe.analyzedInstructions);
      const infoSteps = Array.isArray(stepsArray)
        ? stepsArray.map((props) => {
            const { number, step, ingredients, equipment } = props;
            return `${number}. ${step}, ingredients: ${
              ingredients.length
                ? ingredients.map(({ name }) => name).join(' ')
                : 'not ingredients'
            }, equipment: ${
              equipment.length
                ? equipment.map(({ name }) => name).join(' ')
                : 'not equiment'
            }`;
          })
        : stepsArray;

      const allStepsAndDataInfo = {
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
        vegetarian: recipe.vegetarian,
        vegan: recipe.vegan,
        glutenFree: recipe.glutenFree,
        healthScore: recipe.healthScore,
        typeOfDiets: diets.join(', '),
        cuisines: recipe.cuisines.join(''),
        dishTypes: recipe.dishTypes.join(', '),
        summary: recipe.summary.replace(/<[^>]+>/g, ''),
        analyzedInstructions: infoSteps,
      };
      return allStepsAndDataInfo;
    } else {
      throw new Error('recipe not found my friend!');
    }
  } catch (error) {
    return error;
  }
};

module.exports = { getRecipeDetailById };
