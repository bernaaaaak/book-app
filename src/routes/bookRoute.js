"use strict";

const router = require("express").Router()

const { route } = require("express/lib/router")
const { BookPost } = require("../controllers/bookController")

router.route('/posts')
    .get(BookPost.list)
    .post(BookPost.create)

router.route('/posts/:postId')
    .get(BookPost.read)
    .put(BookPost.update) // put patch aynı
    .patch(BookPost.update)
    .delete(BookPost.delete)


module.exports = router