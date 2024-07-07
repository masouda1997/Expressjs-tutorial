const express = require('express')
const path = require('path')


const port = process.env.PORT || 5000

const app = express()

app.get('/' , (req,res)=>{
   res.send('hello backend and API')
})
app.get('/a' , (req,res)=>{
   res.send({item:"this is about"})
})
app.get('/b' , (req,res)=>{
   res.send('<h1>this is b path</h1>')
})
app.get('/c' , (req,res)=>{
   res.sendFile(path.join(__dirname , 'public','index.html'))
})

app.listen(port , ()=>console.log(`server is running on port ${port}`))