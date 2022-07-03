const Loja = require('../models/Loja');

module.exports = {
   async show(req , res) {
      const {user_id} = req.headers;
      
      const loja = await Loja.find ({user: user_id})

      return res.json(loja);
   }
}