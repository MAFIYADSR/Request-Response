
// const {console} =require('console');
const http = require('http');
const port = 4000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url);

    if(req.url == '/')
    {
        res.end('<h1> Akash dutta </h1>')
    }
    else if(req.url == '/home'){
        res.end('<h1> Welcome home </ht>');
    }
    else if(req.url == '/about')
    {
        res.end('<h1>Welcome to About Us page</h1>')
    }
    else if(req.url == '/node'){
        res.end('<h1>Welcome to my Node Js project</h1>')
    }
    
    
})

server.listen(port, ()=>{
    console.log(`Server is listining on port ${port}`);
})




