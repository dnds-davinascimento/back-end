const User = require ('../models/User');

module.exports = {
    async store ( req, res ) {
        
        const { 
            email, 
            nome ,
            telefone,
        
        } = req .body;
         const    user = await User.create({ 
                
                email,
                nome,
                telefone
            })
        
        
        return res.json(user);
    }
};