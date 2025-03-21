require('dotenv').config();

const express=require("express")
const app=express()

const cors=require("cors")
const corsOptions=require("./config/corsOption")
const connectDB=require("./config/dbConn")
const usersRouter=require("./routes/users")
const photosRouter=require("./routes/photos")
const todosRouter=require("./routes/todos")
const postRouter=require("./routes/posts")
const mongoose= require("mongoose")
const PORT=process.env.PORT||4444

connectDB()
app.use(express.json())
app.use(cors(corsOptions))

app.get( '/',(req,res)=>{
res.send("this is the home page")
})
app.use('/api/Users',usersRouter)
app.use('/api/Photos',photosRouter)
app.use('/api/Todos',todosRouter)
app.use('/api/Posts',postRouter)

mongoose.connection.once('open', () => {
    app.listen(PORT, () => {
        console.log(`the server is running on port ${PORT}`);
    });
});

mongoose.connection.on('err',err=>
    console.log(err)
)
