const express=require("express")
const router=express.Router()
const Users=require("../models/Users")
const userController=require("../controllers/userController")

router.get("/get", userController.getAllUsers);
router.post("/create", userController.createUser);
router.put("/update/:id", userController.updateUser);
router.delete("/delete/:id", userController.deleteUser);

module.exports=router