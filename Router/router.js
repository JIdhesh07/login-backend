const express=require('express')

const jwtMiddleware = require('../Middlewares/jwtMiddleware')

const FormDataController = require('../Controllers/FormDataController')

const multerConfig = require('../Middlewares/mulerMiddleware')




const router=new express.Router()
const userController=require('../Controllers/userController')

router.post('/register',userController.register)

router.post('/login',userController.login)

// router.put('/update/:uid', userController.updateUser)

router.post('/form/add',jwtMiddleware,multerConfig.single('file'),FormDataController.addForm)

 
module.exports=router
