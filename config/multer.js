const multer = require("multer");

const armazenamento = multer.diskStorage({
    destination:function (req,file,cb){
        cb(null,"./assets/images/uploads")
    },

    filename:function (req,file,cb){
        cb(null,Date.now()+file.originalname)
    }
})


let upload = multer ({storage:armazenamento,limits:{fileSize:1000 }}
    
    
    )


module.exports = upload