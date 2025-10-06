const express=require('express')
const path=require('path')
const app=express()

app.use(express.static('public'))

app.get('/home',(request,response)=>{
    response.sendFile(path.resolve(__dirname,'pages/index.html'))
})

app.get('/about',(request,response)=>{
    response.sendFile(path.resolve(__dirname,'pages/about.html'))
})

app.get('/post',(request,response)=>{
    response.sendFile(path.resolve(__dirname,'pages/post.html'))
})

app.get('/contact',(request,response)=>{
    response.sendFile(path.resolve(__dirname,'pages/contact.html'))
})

app.listen(3000,()=>{
    console.log("Server running in port 3000")
})