const mongose = require('mongoose');
const schema = mongose.Schema;

const orderSchema = new schema({
    user:{
        type: schema.Types.ObjectId,
        ref: 'Users'
    },
    orders:[{
        product:{
            type: schema.Types.ObjectId,
            ref: 'Products' 
        }
    }],
    totalPay:{
        type: Number
    }
},
{
    timestamps: true
});

const Orders = mongose.model('Orders', orderSchema);

module.exports = Orders;