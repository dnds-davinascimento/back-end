const express = require ('express');
const multer = require('multer');

const uploadConfig = require('./config/upload')



const Usercontroller = require ('./controllers/usercontroller')
const Lojacontroller = require ('./controllers/Lojacontroller')
const Produtocontroller = require ('./controllers/Produtocontroller');
const homecontroller = require('./controllers/homecontroller');
const Pedidocontroller = require('./controllers/pedidocontrolles');
const LoginUserController = require('./controllers/loginusercontroller');


const routes = express.Router();
const upload = multer(uploadConfig);





routes.post('/user', upload.single('perfil') ,Usercontroller.store);
routes.post('/login', upload.single('perfil') ,LoginUserController.store);
routes.post('/loja',upload.single('foto') ,Lojacontroller.store);
routes.post('/produto',upload.single('thumbnail') , Produtocontroller.store);
routes.post('/loja/:loja_id/pedido',Pedidocontroller.store);

routes.get('/loja',Lojacontroller.index);
routes.get('/home', homecontroller.show);



module.exports = routes;