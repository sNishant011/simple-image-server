const { compressAndResizeImage } = require("./utils/image.util")

const handleImageUpload = async (req, res) => {
  if (req.file) {
     const result = await compressAndResizeImage(req.file);
    console.log(result)
    if (result.success === 0) {
      return res.send({
        success: 0,
        message: "Image upload failed"
      })
    }

    const compressedImagePath = req.protocol + "://" + req.get("host") + "/images/thumbnail/" + req.file.filename;

    // const file path with host
    const filePath = req.protocol + "://" + req.get("host") + "/images/full/" + req.file.filename;
    return res.send({
      message: "Image uploaded successfully",
      success: 1,
      file: {
        url: filePath,
        thumbnailUrl: compressedImagePath
      }
    })
  }
  return res.send({
    success: 0,
    message: "Image upload failed"
  })
}

module.exports = handleImageUpload
