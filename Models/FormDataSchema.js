const mongoose = require('mongoose')

const FormDataSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },

    file: {
        type: String,
        // required: true,
    },
    userId: {
        type: String,
        required: true,
    }

})

const Formdata = mongoose.model('Formdata', FormDataSchema)

module.exports = Formdata