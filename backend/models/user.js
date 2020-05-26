const mongoose = require('mongoose');

let User = new mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    job: {
        type: String
    }
});

module.exports = mongoose.model('User', User);



// module.exports = mongoose.model('Item', Item);