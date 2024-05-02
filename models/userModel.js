const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please add a user name']
    },
    email: {
        type: String,
        required: [true, 'please enter an email address'],
        unique: [true, 'Email address already taken by another user']
    },
    password: {
        type: String,
        required:[true, 'Please enter a password']
    }
}, {
    timestamps: true
})


module.exports = mongoose.model('User', userSchema)