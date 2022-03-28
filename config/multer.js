const multer = require("multer");

const armazenamento = multer.diskStorage({
    destination:function (req,file,cb){
        cb(null,"./assets/images")
    },

    filename:function (req,file,cb){
        cb(null,Date.now()+file.originalname)
    }
})


let upload = multer ({storage:armazenamento})


module.exports = upload