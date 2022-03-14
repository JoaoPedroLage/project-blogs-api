const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

};

module.exports = (sequelize) => {
  const Category = sequelize.define(
    'Category',
    Attributes,
    { tableName: 'Categories' },
  );

  // Category.associate = (models) => {
  //   models.Category.belongsTo(
  //     models.Blog,
  //     { foreignKey: 'category_id', as: 'categoryId' },
  //   );
  // };

  return Category;
};