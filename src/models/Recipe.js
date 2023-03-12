const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'recipe',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vegetarian: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      vegan: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      glutenFree: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      summary: {
        type: DataTypes.STRING(5000),
        allowNull: false,
      },
      healthScore: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      analyzedInstructions: {
        type: DataTypes.STRING(10000),
        allowNull: true,
      },
      cuisines: {
        type: DataTypes.ARRAY(DataTypes.STRING(1000)),
        allowNull: false,
      },
      dishTypes: {
        type: DataTypes.ARRAY(DataTypes.STRING(1000)),
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
