const mongoose = require('mongoose');
const slugify = require('slugify')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
})


const User = mongoose.model('User', UserSchema);
module.exports = User;