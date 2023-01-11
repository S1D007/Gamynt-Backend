const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    joinedClubs:{
        type:mongoose.Schema.Types.Array
    },
    avatar:{
        type:String
    },
    banner:{
        type:String
    },
    joinedTournaments:{
        type:mongoose.Schema.Types.Array
    },
    uid:{
        type:String
    },
    tags:[
        {
            name:String,
            tag:String
        }
    ],
    gamesIPlay:{
        type:[]
    },
    crew:{
        type:[]
    },
    balance:{
        type:Number
    }
})

module.exports = userSchema
