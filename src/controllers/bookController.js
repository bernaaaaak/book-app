"use strict";

require("express-async-errors")

const { BookPost } = require("../models/bookModel")


module.exports.BlogPost = {

    list: async (req, res) => {
        const data = await BookPost.find()
        res.status(200).send({
            error: false,
            data: data

        })

    },
    create: async (req, res) => {


        const data = await BookPost.create(req.body)
        res.status(201).send({
            error: false,
            body: req.body,
            data: data

        })

    },
    read: async (req, res) => {
        const data = await BookPost.find({ _id: req.params.postId })
        res.status(202).send({
            error: false,
            data: data

        })

    },
    update: async (req, res) => {
        const data = await BookPost.updateOne({ _id: req.params.postId }, req.body)
        const newdata = await BookPost.find({ _id: req.params.postId })
        res.status(202).send({
            error: false,
            body: req.body,
            data: data, // info about update
            newdata: newdata  // güncel veriyi istiyorsan tekrar çağır

        })

    },
    delete: async (req, res) => {
        const data = await BookPost.deleteOne({ _id: req.params.postId })
        // console.log(data);
        res.sendStatus((data.deletedCount >= 1) ? 204 : 404)

    }
}