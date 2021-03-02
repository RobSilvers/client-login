const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const clientSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        min: 3, 
        max: 20,
        default: ''
    },
     companyName: {
        type: String,
        required: true,
        trim: true,
        min: 3, 
        max: 20,
        default: ''
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        default: ''

    },
    password: {
        type: String,
        required: true,
        default: ''
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    contactNumber: { type: String },
    profilePicture: { type: String },
    dateRegistered: { 
        type: Date,
        // required: true,
        default: Date.now
    }
}, { timestamps: true });


clientSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

clientSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('Client', clientSchema);