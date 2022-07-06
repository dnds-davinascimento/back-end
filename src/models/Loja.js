const mongoose = require ('mongoose');

const LojaSchema = new  mongoose.Schema({
    
    box: String,
    foto: String,
    port: String,
    produto : [String],
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
   
    },
    { toJSON:{ virtuals: true,},
    });
        LojaSchema.virtual('foto_url').get(function(){
        return `http://localhost:3333/files/${this.foto}`
    })

module.exports = mongoose.model('Loja', LojaSchema);