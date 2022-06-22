const express = require ('express');
const multer = require('multer');

const uploadconfig = require('./config/upload');
const Sessioncontroller = require ('./controllers/Sessioncontroller')
const Lojacontroller = require ('./controllers/Lojacontroller')
const Produtocontroller = require ('./controllers/Produtocontroller')

const routes = express.Router();
const upload = multer(uploadconfig);

routes.post('/sessions', upload.single('perfil') ,Sessioncontroller.store);
routes.post('/loja',upload.single('thumbnail') ,Lojacontroller.store);
routes.post('/produto',upload.single('thumbnail') , Produtocontroller.store);


module.exports = routes;