const mongoose = require('mongoose');
const schema = mongoose.Schema;
const pagination = require('mongoose-paginate');

const productSchema = new schema({
    name: {
        type: String,
        required: 'name is required'
    },
    description: {
        type: String,
        required: 'description is required'
    },
    gambar: {
        type: String
    },
    price: {
        type: Number,
        required: 'price is required'
    },
    stock: {
        type: Number,
        default: 0
    },
    kategori: {
        type: schema.Types.ObjectId,
        ref: 'Categories'
    }

},
    {
        timestamps: true
    });

productSchema.plugin(pagination);

const Products = mongoose.model('Products', productSchema);

module.exports = Products;