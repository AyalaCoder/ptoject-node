const mongoose=require("mongoose")
const postsSchama=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String
    }
})
module.exports = mongoose.models.Posts || mongoose.model('Posts', postsSchema);