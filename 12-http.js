const http = require('http');

const server =http.createServer((req,res) =>{
    if(req.url ==='/'){
        res.end('Welcome to our homepage');
    }
    if(req.url ==='/about'){
        res.end('Welcome to our About Page');
    }
    res.end(`
     <h1>Oops!!</h1>
     <p?The page you are looking for is not available</p>
     <a href ="/" > Back to home</a>
    `);
})

server.listen(5000);