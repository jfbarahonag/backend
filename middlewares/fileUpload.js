const model = require('../models/file');
const multer = require("multer")

// Set the disk
const storage = multer.diskStorage({
  destination: './public/images/products',
  // Set the filename
  filename: async (req, file, cb) => {
    let fileName = file.originalname.toLowerCase().split(' ').join('-')
    const exist = await model.findOne({ name: fileName })
    fileName = (exist) ? Date.now() + '-' + fileName : fileName
    cb(null, fileName)
  }
})

let upload = multer({ storage: storage })

module.exports = { upload }