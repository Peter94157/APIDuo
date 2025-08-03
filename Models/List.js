
const mongoose = require('mongoose')

const CardapioSchema  = new mongoose.Schema({
    
            dia: String, // Ex.: "segunda", "terça"
            guarnicao: [String],
            proteina: [String],
            salada: [String],
            bebida: [String]
    

})

const Cardapio = mongoose.model('Cardapio',CardapioSchema);

module.exports = Cardapio