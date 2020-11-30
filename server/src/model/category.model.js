const mongoose = require('mongoose');
const schema = mongoose.Schema;
const pagination = require('mongoose-paginate');



const categorySchema = new schema({
    name: {
        type: String
    }
},
{
    timestamps: true
});

categorySchema.plugin(pagination);

const Categories = mongoose.model('Categories', categorySchema);
module.exports = Categories;