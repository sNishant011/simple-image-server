const multer = require('multer');

const storage = multer.diskStorage({
  destination: "./images/",
  filename: function (_req, file, cb) {
    // for making file name unique
    const uniqueName = Date.now() + "-" + (file.originalname);
    cb(null, uniqueName);
  }
});

const upload = multer({ storage: storage }).single("image");

module.exports = upload;
