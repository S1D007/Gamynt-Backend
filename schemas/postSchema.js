const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    type:String,
    uid:String,
    username:String,
    message:String,
    date:String,
    likes:Number,
    image:String,
    avatar:String,
    comments:[
        {
            username:String,
            date:String,
            message:String
        }
    ]
})

module.exports = postSchema
