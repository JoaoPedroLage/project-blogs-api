const userService = require('../services/userService');

const create = async (req, res, _next) => {
  const { displayName, email, password, image } = req.body;
  
  try {
    const user = await userService.create({ displayName, email, password, image });
    
    if (!user) return res.status(409).json({ message: 'User already registered' });
    
    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: `Erro: ${error.message}` });
  }
};

const findAll = async (_req, res, _next) => {
  try {
    const user = await userService.findAll();

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: `Erro: ${error.message}` });
  }
};

const findByPk = async (req, res, _next) => {
  try {
    const user = await userService.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: `Erro: ${error.message}` });
  }
};

module.exports = {
  create,
  findAll,
  findByPk,
};
