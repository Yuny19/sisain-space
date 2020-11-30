const mongoose = require('mongoose');
const schema = mongoose.Schema;
const pagination = require('mongoose-paginate');

const expeditionSchema = new schema({
    name: {
        type: String,
        required: 'name is required'
    }
},
{
    timestamps: true
});

expeditionSchema.plugin(pagination);

const Expeditions = mongoose.model('Expeditions', expeditionSchema);

module.exports = Expeditions;