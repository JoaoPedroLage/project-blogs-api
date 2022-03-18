const { createToken } = require('../utils/auth');

const { User } = require('../models');

const create = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) { 
    return null;
  }

  const token = createToken(user);

  return { token };
};

module.exports = {
  create,
};
