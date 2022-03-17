require('dotenv').config();

const userService = require('../services/loginService');

const create = async (req, res) => {
  const { email, password } = req.body;
  try {
    const login = await userService.create({ email, password });

    if (login === null) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    return res.status(200).json(login);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: `Erro: ${error.message}` });
  }
};

module.exports = {
  create,
};
