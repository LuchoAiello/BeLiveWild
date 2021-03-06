const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
        cb(null, './public/images/avatars'); 
     }, 
     filename: function (req, file, cb) { 
        cb(null, Date.now() + path.extname(file.originalname));  } 
})

const uploadFile = multer({storage: storage});


module.exports = uploadFile;