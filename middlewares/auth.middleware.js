const { verifyToken } = require('../utils/auth');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  const userData = verifyToken(authorization);

  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  if (!userData) return res.status(401).json({ message: 'Expired or invalid token' });

  req.user = userData;
  
  next();
};
