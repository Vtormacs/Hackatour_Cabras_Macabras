const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const UserSchema = new Schema({
    username: {
        type: String, 
        required: true },
    email: {
        type: String,
        required: true,
    }, 
    password: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("User", UserSchema)