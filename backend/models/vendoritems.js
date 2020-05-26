const mongoose = require('mongoose');

let VendorItems = new mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number
    }
});

module.exports = mongoose.model('VendorItems', VendorItems);
