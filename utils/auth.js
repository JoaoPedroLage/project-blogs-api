require('dotenv').config();

const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;
const JWT_CONFIG = {
  expiresIn: '12m',
  algorithm: 'HS256',
};

const createToken = (user) => {
  const { password: passDb, ...userWithouPassword } = user.dataValues;
  const token = jwt.sign(userWithouPassword, SECRET, JWT_CONFIG);
  return token;
};

const verifyToken = (token) => {
  try {
    const dataUser = jwt.verify(token, SECRET);
    return dataUser;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

module.exports = { createToken, verifyToken };
