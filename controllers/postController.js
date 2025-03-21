const Posts=require("../models/Posts")

const createPost = async(req,res)=>{
    const {title,body}=req.body
    if(!title)
       return res.status(404).json({message:'there is a title missing'})
    const post = await Posts.create({title,body})
    res.json(post)

}
const getAllPosts=async (req, res) => {
    const posts = await Posts.find().lean()
    if (!posts?.length) {
    return res.status(400).json({ message: 'No posts found' })
    }
    res.json(posts)
    }

const updatePost= async (req, res) => {
    const {id}=req.params
    const {title,body}= req.body
    if(!title){
        return res.status(400).json({ message: 'No a title missing' })
    }
    const post = await Posts.findById(id).exec()
    if (!post) {
    return res.status(400).json({ message: 'post not found' })
    }
    post.title = title
    if(body){
    post.body = body}
    const updatedPost = await post.save()
    res.json(`'${updatedPost.title}' updated`)
    }
const deletePost=async (req, res) => {
    const { id } = req.params
    const post = await Posts.findById(id).exec()
    if (!post) {
    return res.status(400).json({ message: 'post not found' })
    }
    const reply=`Post '${post.title}' ID ${post.id} deleted`
    const result = await post.deleteOne()
    res.json(reply)
    }
    module.exports = {
        createPost,
        getAllPosts,
        updatePost,
        deletePost
        }