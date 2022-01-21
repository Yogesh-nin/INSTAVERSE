import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'
import dotenv from 'dotenv'
const app = express()

dotenv.config()
app.use(bodyParser.json({limit: "32mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "32mb", extended: true}))
app.use(cors())

app.use('/posts', postRoutes)
app.use('/user', userRoutes)

// const CONNECTION_URL = 'mongodb+srv://chandra_yogesh:yogesh_chandra@cluster0.o9dui.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL)
    .then(()=> app.listen(PORT, ()=> console.log(`Server running on Port: ${PORT}`)))
    .catch(err => console.log(err.message))