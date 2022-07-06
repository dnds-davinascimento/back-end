const express = require ('express');
const mogoose = require ('mongoose')
const cors = require ('cors');
const path = require('path');

const routes = require('./routes')


const app = express();
mogoose.connect('mongodb+srv://davi-nascimento:22102210@bancotest.bwhso.mongodb.net/bancotest?retryWrites=true&w=majority');
app.use(cors());
app.use(express.json());

app.use('/files', express.static(path.resolve (__dirname, '..','uploads')));
app.use(routes);





app.listen(3333);