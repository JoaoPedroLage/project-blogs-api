const { User } = require('../models');

const create = async ({ displayName, email, password, image }) => {
  const registeredUsers = await User.findAll();
  const registeredUsersEmails = registeredUsers.map((user) => user.email);
  const emailExist = registeredUsersEmails.includes(email);

  if (emailExist) return null;

  const newUser = await User.create({ displayName, email, password, image });

  return newUser;
};

const findAll = async () => {
  const allUsers = await User.findAll();

  return allUsers;
};

const findByPk = async (id) => {
  const user = await User.findByPk(id);

  return user;
};

module.exports = {
  create,
  findAll,
  findByPk,
};
