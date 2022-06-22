const Loja = require('../models/Loja');

module.exports = {
    async store( req, res ){
        
        const {box, produtos, port,price} = req.body;
        const {user_id} = req.headers;

        const loja  = await Loja.create({
            user:  user_id,
            box,
            port,
            produtos ,
            price
        })
       

        return res.json (loja);
    }
};
