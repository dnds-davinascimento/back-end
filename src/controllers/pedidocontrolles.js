const Pedido = require('../models/pedido');

module.exports = {
    async store (req ,res){
        const {user_id} = req.headers;
        const {loja_id} = req.params;
        const {
            date, 
            produto,
            quantidade,
            un
        } = req.body;
        
        const pedido = await Pedido.create({
            user:user_id,
            loja: loja_id,
            date,
            produto,
            quantidade,
            un,
        });
        return res.json(pedido);
    }
};