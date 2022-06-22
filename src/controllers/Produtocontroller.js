const Produto = require('../models/Produto');

module.exports = {
    async store( req, res ){
        
        
       
        const {nome, preço, quantidade, un} = req.body;
        const {box_id} = req.headers;

        const produto  = await Produto.create({
            box:  box_id,
            nome,
            preço,
            quantidade,
            un
            
        })
       

        return res.json (produto);
    }
};