const Loja = require('../models/Loja');
const User = require('../models/User');


module.exports = {
    async index(req, res){
        
        const {produto} =  req.query;

        const loja = await Loja.find({ produto: produto })
        return res.json(loja);
    },
    async store( req, res ){
        const {filename} = req.file;
        const {box, produto, port,price} = req.body;
        const {user_id} = req.headers;

        const user = await User.findById(user_id);

        if(!user){
            return res.status(400).json({ error: 'User does not exist'});
        }


        const loja  = await Loja.create({
            user:  user_id,
            foto :filename,
            box,
            port,
            produto: produto.split(',').map( produto => produto.trim()) ,
            price
        });

        return res.json (loja);

    }
};

