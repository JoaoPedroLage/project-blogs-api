const { Category } = require('../models');

const create = async (name) => {
  const newCategory = await Category.create(name);

  return newCategory;
};

const findAll = async () => {
  const allCategories = await Category.findAll();

  return allCategories;
};

module.exports = {
  create,
  findAll,
};
