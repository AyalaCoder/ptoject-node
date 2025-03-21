const mongoose=require("mongoose")
const todosSchama=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    tags:{
        type:String
    },
    completed:{
        type:Boolean,
    }
},{
    timestamps: true
})
module.exports=mongoose.model('Todos',todosSchama)