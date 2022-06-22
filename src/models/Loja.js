const mongoose = require ('mongoose');

const LojaSchema = new  mongoose.Schema({
    
    box: String,
    port: String,
    produtos : [String],
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
   
});
module.exports = mongoose.model('Loja', LojaSchema);