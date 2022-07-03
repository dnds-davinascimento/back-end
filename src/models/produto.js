const mongoose = require ('mongoose');

const ProdutoSchema = new  mongoose.Schema({
    nome: String,
    preço: Number,
    quantidade:Number,
   
    un: String,
  
    box : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Box'
    }
   
});
module.exports = mongoose.model('Produto', ProdutoSchema);
