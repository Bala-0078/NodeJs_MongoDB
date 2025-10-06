const path=require('path')
const express=require('express')
const app=express()
app.listen(3000,()=>{
    console.log("server is running in port 3000")
})
app.get("/about",(request, response)=>{
    response.sendFile(path.resolve(__dirname,'about.html'))
})
app.get("/contact",(request, response)=>{
    response.sendFile(path.resolve(__dirname,'contact.html'))
})
app.get("/",(request, response)=>{
    response.sendFile(path.resolve(__dirname,'index.html'))
})






















/* 
const http=require('http')
const fs=require('fs')
const homePage=fs.readFileSync('index.html')
const contactPage=fs.readFileSync('contact.html')
const aboutpage=fs.readFileSync('about.html')
const server = http.createServer((request,response)=>{
    if(request.url==="/"){
        return response.end(homePage)
    }
    else if(request.url==="/contact"){
        return response.end(contactPage)
    }
    else if(request.url==="/about"){
        return response.end(aboutpage)
    }
    else{
        response.writeHead(404)
        response.end("PAGE NOT FOUND")
    }
    //console.log(request.url)
    //response.end("Hello node.js")
})
server.listen(3000)  
*/