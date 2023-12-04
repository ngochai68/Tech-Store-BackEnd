const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult, body } = require('express-validator');

const validateRegister = [
  body('username').not().isEmpty().withMessage('Tên người dùng không được để trống'),
  body('email').isEmail().withMessage('Email không hợp lệ'),
  body('password').isLength({ min: 6 }).withMessage('Mật khẩu phải có ít nhất 6 ký tự')
];

async function register(req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const existingUsername = await User.findUserByUsername(req.body.username);
    if (existingUsername) {
      return res.status(409).json({ message: 'Username đã được sử dụng' });
    }

    // Kiểm tra xem người dùng đã tồn tại chưa
    const existingUser = await User.findUserByEmail(req.body.email);
    if (existingUser) {
      return res.status(409).json({ message: 'Email đã được sử dụng' });
    }

    // Mã hóa mật khẩu và tạo người dùng mới
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const userId = await User.createUser({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    });

    res.status(201).json({ message: 'Đăng ký thành công', userId: userId });
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  try {
    const user = await User.findUserByEmail(req.body.email);

    // Kiểm tra nếu không tìm thấy người dùng với email đó
    if (!user) {
      return res.status(401).json({ message: 'Email không tồn tại' });
    }

    // Kiểm tra mật khẩu
    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Mật khẩu không chính xác' });
    }

    // Nếu mọi thứ đều ổn, tạo JWT token
    const token = jwt.sign(
      { userId: user.user_id, username: user.username },
      process.env.JWT_SECRET, // Sử dụng secret từ biến môi trường
      { expiresIn: '1h' } // Token hết hạn sau 1 giờ
    );

    res.json({ message: 'Đăng nhập thành công', token: token, userId: user.user_id });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  register,
  validateRegister,
  login
};
