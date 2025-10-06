const http=require('http')
const server = http.createServer((request,response)=>{
    if(request.url==="/"){
        return response.end("THE HOME PAGE")
    }
    else if(request.url==="/contact"){
        return response.end("THE CONTACT PAGE")
    }
    else if(request.url==="/about"){
        return response.end("THE ABOUT PAGE")
    }
    else{
        response.writeHead(404)
        response.end("PAGE NOT FOUND")
    }
    //console.log(request.url)
    //response.end("Hello node.js")
})
server.listen(3000)