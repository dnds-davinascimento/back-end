const LoginUser = require ('../models/LoginUser');

module.exports = {
    async store ( req, res ) {
        
        const { 
             
            nome ,
            senha,
        
        } = req .body;

         let loginuser = await LoginUser.findOne({nome , senha});
         
         if (!loginuser){
         loginuser = await LoginUser.create({ 
                nome,
                senha
            })
        }
        
        return res.json(loginuser);
    }
};
