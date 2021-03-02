const mongoose = require('mongoose');

const ClientSessionSchema = new mongoose.Schema({
    clientId: {
        type: String,
        default: ''
    },
    timestamp: {
        type: Date,
        default: Date.now()
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});



module.exports = mongoose.model('ClientSession', ClientSessionSchema);