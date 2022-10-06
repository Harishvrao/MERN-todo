const {Schema, model} = require('mongoose')

const todoSchema = new Schema({
    data:{
        type:String,
        required:true
    },
    done:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

module.exports = model('todos', todoSchema)