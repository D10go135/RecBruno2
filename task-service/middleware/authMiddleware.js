const axios = require('axios');

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.sendStatus(401);

  try {
    await axios.get('http://auth-service:3002/verify', {
      headers: { Authorization: authHeader }
    });
    next();
  } catch {
    res.sendStatus(403);
  }
};