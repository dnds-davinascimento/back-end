const mongoose = require ('mongoose');

const UserSchema = new  mongoose.Schema({
    
    nome: String,
    email: String,
    telefone: Number,
    
});
module.exports = mongoose.model('User', UserSchema);

