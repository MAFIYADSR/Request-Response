// const http = require('http');

// const server = http.createServer((req, res) =>
// {
//     res.end("Akash dutta");
// })

// server.listen(4000)

const http = require('http');
const port = 4000;
const server = http.createServer((req, res) => {
    // console.log(req.url);
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1> Akash dutta </h1>')
})

server.listen(port, ()=>{
    console.log(`Server is listining on port ${port}`);
})