const multer = require('multer');
const path = require('path');

// Cấu hình lưu trữ
const storage = multer.diskStorage({
  // Thiết lập nơi lưu trữ file
  destination: function (req, file, cb) {
    cb(null, path.join('public', 'images'));
  },

  // Thiết lập tên file
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

// Lọc file: chỉ cho phép upload file hình ảnh
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new Error('Không phải file hình ảnh'), false);
  }
};

// Cấu hình Multer
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5 // Giới hạn kích thước file 5MB
  }
});

module.exports = upload;
