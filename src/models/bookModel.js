"use strict";

const mongoose = (require("mongoose"))

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    author: {
        type: String,
        trim: true,
        required: true
    },
    ISBN: {
        type: Number,
        unique: true,
        required: [true, 'error message']
    },
    genre: {
        type: String,
        trim: true
    },
    publicationYear: {
        type: Number,
        default: null
    },
    Image: {
        type: String,
        trim: true,
        default: null,
        unique: true
    }

     //  createdAt //  updatedAt
}
)

module.exports = {
    BookPost: mongoose.model('BookPost', bookSchema)

}