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
    { tableName: 'Categories', timestamps: false },
  );

  return Category;
};