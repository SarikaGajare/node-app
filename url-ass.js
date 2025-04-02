const url=require('url');
const tableFromaturl =url.format({
    protocol :'https',
    hostname:'www.google.com',
    pathname: './search',
    query:{
        q:'nodeJS',
    }

});
console.log(tableFromaturl);
