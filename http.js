const fs = require('fs');
const http = require('http');
const _ = require('lodash');
const httpService = http.createServer((req,res)=>{
    console.log(req.url,req.method);
    
    //response object
    res.setHeader('Content-Type','text/html')
    // serving static html content
    // res.write('<head><link rel="stylesheet" href="#"></link></head>');
    // res.write('<p style="text-align:center">Hello World.</p>');
    // res.end();
    const rNumber = _.random(5,25);
    console.log(rNumber);
    const apple = _.once(()=>{
        console.log('Run Me Twice Please;')
    });
    apple();
    // apple();    
    // using routing switch  

    let path = './views/'
    switch (req.url) {
        case  '/' : 
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about' :
            path += 'about.html'
            res.statusCode = 200;
            break;
        case '/home' : 
            // res.setHeader()
            res.statusCode=301;
            res.setHeader('Location','/')
            res.end();
            // path += 'index.html'
            break;
        case '/about-mee' :
            res.statusCode = 301;
            res.setHeader('Location', '/about')
            res.end();
            break;
        default:
            path += '404.html'
            res.statusCode = 404;
            break;
    }
    fs.readFile(path,(err,data)=>{
        console.log(err);
        if(err){
            console.log(err);
        }else{
            res.write(data)
            res.end();
        }
    })
    // res.end();
    // res.write('./views/index.html',(err)=>{
    //     if(err){
    //         console.log(err);
    //     }
    //     r
    // })
    // res.end();
})

httpService.listen(5206,'localhost',()=>{
    console.log('Request Object Is Displayed Here.');
})