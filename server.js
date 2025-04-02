//const  url = http://localhost:8080/;
 
const http =require('http');
const httpServer = http.createServer( (request, response)=>{
   const url=request.url;
   console.log(`recevied url: ${url}  `);
   switch(url){
    case '/' :
       response.end(`home content`);
        break;

        case '/home' :
       response.end(`home content`);
        break;
        case '/about' :
       response.end(`about content`);
        break;
        case '/project' :
       response.end(`project content`);
        break;
        case '/skills' :
       response.end(`skills content`);
        break;
        default:
            break;
   }
   response.end(`request URL -${url}`);

    console.log("I have received request....");
    console.log('Let me response....');
    //response.end("Hello, from server....");
} );

httpServer.listen(8080, ()=>{
    console.log(`Server started on port 8080`); 
});

//console.log("My first node-app");