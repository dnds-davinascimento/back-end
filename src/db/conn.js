const mongoose =require ("mongoose")
require('dotenv').config()
async function main(){
    //${process.env.DB_USER}:${process.env.DB_PASSWORD}
try {
mongoose.set("strictQuery", true)

    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@alago.nicqalo.mongodb.net/?retryWrites=true&w=majority`)
    console.log("conectado ao banco")

} catch (error) {
    console.log(`Erro: ${error}`)
}

}
module.exports = main