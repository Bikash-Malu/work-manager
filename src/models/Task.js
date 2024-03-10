const { default: mongoose, Schema } = require("mongoose");

const TaskSchema=Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    addedDate:{
        type:Date,
        default:Date.now()
    },
    status:{
        type:String,
        enum:['pending','complete'],
        default:'pending'
    },
    userid:{
        type:mongoose.ObjectId,
        required:true
    }
})
export const Task=mongoose.models.tasks||mongoose.model("tasks",TaskSchema);
