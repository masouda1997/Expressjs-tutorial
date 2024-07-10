// const express = require('express')
import express from 'express'
// const path = require('path')
import path from 'path'
// const posts = require('./routes/post')
import posts from './routes/post.js'
// es modules
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';




const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const port = process.env.PORT || 5000


const app = express()
// body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
// adding logger middleware
app.use(logger)

app.get('/a' , (req,res)=>{
   res.send('hello backend and API')
})
app.get('/b' , (req,res)=>{
   res.send({item:"this is about"})
})
app.get('/c' , (req,res)=>{
   res.send('<h1>this is b path</h1>')
})
app.get('/d' , (req,res)=>{
   res.sendFile(path.join(__dirname , 'public','index.html'))
})

// setup static folder
app.use(express.static(path.join(__dirname , 'public'))) // run every thing in public

// Router 
app.use('/api/posts',posts)

app.use(notFound)
// Error middleware should be here after top function
app.use(errorHandler)

app.listen(port , ()=>console.log(`server is running on port ${port}`))