const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        min: 3,
        max: 20
    },
    slug: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        min: 3,
        max: 20
    },
});

module.exports = mongoose.model('Country', countrySchema);