const User = require('../models/User');

async function getUserById(req, res, next) {
  try {
    const user = await User.findUserById(req.params.userId);
    const message = 'User retrieved successfully.';
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message, user });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getUserById
};
