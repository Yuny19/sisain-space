const mongoose = require('mongoose');
const schema = mongoose.Schema;

const addressSchema = new schema({
    user: {
        type: schema.Types.ObjectId,
        ref: 'Users'
    },
    name: {
        type: String
    },
    detail: {
        type: String
    },
    kecamatan: {
        type: String
    },
    kabKota: {
        type: String
    },
    provinsi: {
        type: String
    },
    kodepos: {
        type: String
    }
},
{
    timestamps: true
});

const Adrress = mongoose.model('Address', addressSchema);

module.exports = Adrress;