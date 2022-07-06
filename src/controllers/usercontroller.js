const User = require ('../models/User');

module.exports = {
    async store ( req, res ) {
        
        const { 
            email, 
            nome ,
            telefone,
        
        } = req .body;
        let user = await User.findOne({email, nome, telefone});

        if (!user){
        
         user = await User.create({ 
                
                email,
                nome,
                telefone
            })
    }
        
        return res.json(user);
    }
};