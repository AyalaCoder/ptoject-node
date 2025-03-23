const mongoose=require("mongoose")
const usersSchema=new mongoose.Schema({
name:{
    type:String
},
username:{
    type:String,
    required:true
},
email:{
    type:String
},
address:{
    type:String,
    required:true
},
phone:{
    type:String,
    required:true
}
})
module.exports= mongoose.model('Users', usersSchema)