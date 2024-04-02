const express=require('express');
const router=express.Router();

const userControllers=require('../controllers/user')

router.get('/devices',userControllers.getDevices);

router.get('/add-devices',userControllers.getAddDevice);

router.get('/devices/:deviceId',userControllers.getDashBoard);


router.get('/mailbox',userControllers.getMailbox);

router.post('/add-devices',userControllers.postAddDevice);

module.exports=router;