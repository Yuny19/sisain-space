const mongoose = require('mongoose');
const schema = mongoose.Schema;
const pagination = require('mongoose-paginate');

const transactionSchema = new schema({
    user: {
        type: schema.Types.ObjectId,
        ref: 'Users'
    },
    namaPenerima: {
        type: String
    },
    totalProduct: {
        type: Number
    },
    totalPay: {
        type: Number
    },
    payment: {
        type: String
    },
    address: {
        type: schema.Types.ObjectId,
        ref: 'Address'
    },
    expedition: {
        type: schema.Types.ObjectId,
        ref: 'Expeditions'
    },
    status: {
        type: String,
        default: 'On Progress'
    }
},
    {
        timestamps: true
    });

transactionSchema.plugin(pagination);

const Transactions = mongoose.model('Transactions', transactionSchema);

module.exports = Transactions;