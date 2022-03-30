const multer = require("multer");

const armazenamento = multer.diskStorage({
    destination:function (req,file,cb){
        cb(null,"./assets/images/uploads")
    },

    filename:function (req,file,cb){
        cb(null,Date.now()+file.originalname)
    }
})


let upload = multer ({storage:armazenamento,limits:{fileSize:1000},
fileFilter:(req,file,cb)=>{
    if (file.mimetype == "image/png" ||
    file.mimetype == "image/svg" ||
    file.mimetype == "image/jpg" ||
    file.mimetype == "image/jpeg"

) {
    cb(null,true)
}else{cb(null,true) /*return; cb(new Error("tipo inválido")*/}}})


module.exports = upload