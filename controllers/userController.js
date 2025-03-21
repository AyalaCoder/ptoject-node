const Users=require("../models/Users")

const createUser = async(req,res)=>{
    const {name,username,email,address,phone}=req.body
    if(!name||!username||!address||!phone)
       return res.status(404).json({message:'there is a detail missing'})
    const user = await Users.create({name,username,email:email,address,phone})
    res.json(user)

}
const getAllUsers=async (req, res) => {
    const users = await Users.find().lean()
    if (!users?.length) {
    return res.status(400).json({ message: 'No users found' })
    }
    res.json(users)
    }

const updateUser= async (req, res) => {
    const {id}=req.params
    const {name,username, email, address, phone}= req.body
   
    if ( !name||! username||!address||!phone ) {
    return res.status(400).json({message: 'fields are required' })
    }
    
    const user = await Users.findById(id).exec()
    if (!user) {
    return res.status(400).json({ message: 'user not found' })
    }
    user.name = name
    user.username = username
    if(email){
    user.email = email}
    user.address = address
    user.phone = phone
    const updatedUser = await user.save()
    res.json(`'${updatedUser.name}' updated`)
    }
const deleteUser=async (req, res) => {
    const { id } = req.params
    const user = await Users.findById(id).exec()
    if (!user) {
    return res.status(400).json({ message: 'user not found' })
    }
    const reply=`User '${user.name}' ID ${user.id} deleted`
    const result = await user.deleteOne()
   
    res.json(reply)
    }
    module.exports = {
        createUser,
        getAllUsers,
        updateUser,
        deleteUser
        }