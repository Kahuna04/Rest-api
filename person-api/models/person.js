const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const personSchema = new mongoose.Schema({
    user_id: { type: Number, unique: true },
    name: String,
    age: Number,
    email: String,
});

personSchema.plugin(autoIncrement.plugin, { model: 'Person', field: 'user_id' });

module.exports = mongoose.model('Person', personSchema);

