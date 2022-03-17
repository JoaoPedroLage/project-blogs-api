const categoryService = require('../services/categoryService');

const create = async (req, res, _next) => {
  const { name } = req.body;
  
  try {
    const category = await categoryService.create({ name });
    
    if (!category) return res.status(409).json({ message: 'category already registered' });
    
    return res.status(201).json(category);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: `Erro: ${error.message}` });
  }
};

const findAll = async (_req, res, _next) => {
  try {
    const category = await categoryService.findAll();

    return res.status(200).json(category);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: `Erro: ${error.message}` });
  }
};

module.exports = {
  create,
  findAll,
};
