
const sharp = require("sharp")

const compressAndResizeImage = (file,quality = 60, width = 300, height = 300) => {
  return sharp(file.path)
    .resize(width, height)
    .jpeg({ quality: quality }).toFile(`./images/thumbnail/${file.filename}`);
}


module.exports = {
  compressAndResizeImage,
}

