const mongoose = require ('mongoose');

const LoginUserSchema = new  mongoose.Schema({
    
    nome: String,
    
    senha: Number,
    
});
module.exports = mongoose.model('LoginUser', LoginUserSchema);

