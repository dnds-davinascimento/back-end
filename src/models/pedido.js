const mongoose = require ('mongoose');



const PedidoSchema = new  mongoose.Schema({
    
   date: String,
   approved: Boolean,
   user: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User'
   },

   loja: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Loja'
   },
   produto: String,
   quantidate: Number,
   un: String,
    
});
module.exports = mongoose.model('Pedido', PedidoSchema);