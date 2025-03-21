const express=require("express")
const router=express.Router()
const postController=require("../controllers/postController")
router.get('/get',postController.getAllPosts)
router.put('/update/:id',postController.updatePost)
router.post('/create',postController.createPost)
router.delete('/delete/:id',postController.deletePost)
module.exports=router