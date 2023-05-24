const express = require("express")
const cors = require("cors")
const handleImageUpload = require("./image.service")
const multerMiddleware = require("./multer.service")
const app = express()
const port = 3000

app.use(cors({
  origin: [ "http://localhost:5173", "http://localhost:4173" ],
}))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
});

app.post("/upload-image", multerMiddleware, handleImageUpload);

app.use("/images", express.static(__dirname + "/images"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
