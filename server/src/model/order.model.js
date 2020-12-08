const mongose = require('mongoose');
const schema = mongose.Schema;

const orderSchema = new schema({
    user: {
        type: schema.Types.ObjectId,
        ref: 'Users'
    },
    product: {
        type: schema.Types.ObjectId,
        ref: 'Products'
    },
    total: {
        type: Number,
        default: 1
    },
    totalPay: {
        type: Number
    },
    statusOrder: {
        type: String,
        default: 'cart'
    }
},
    {
        timestamps: true
    });

const Orders = mongose.model('Orders', orderSchema);

module.exports = Orders;