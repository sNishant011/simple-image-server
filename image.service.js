
const handleImageUpload = (req, res) => {
  if (req.file) {
    // const file path with host
    const filePath = req.protocol + "://" + req.get("host") + "/images/" + req.file.filename;
    return res.send({
      message: "Image uploaded successfully",
      success: 1,
      file: {
        url: filePath
      }
    })
  }
  return res.send({
    success: 0,
    message: "Image upload failed"
  })
}

module.exports = handleImageUpload
