let middy=require("middy");

const output= content => ({
    statusCode:200,
    body:JSON.stringify(content)
});

const middleWare = reflag=> {
    let log=console.log;
    return{
        before:(handler, next)=>{
            let {queryStringParameters:p}=handler.event;
            log("before", p.email);
            next();
        },
        after:(handler, next)=>{
            let {queryStringParameters:p}=handler.event;
            log("after", p.email);
            next();
        },
        oneError:(handler, next)=>{
            log("error");
            next();
        },
        
    }
}

const fnMain = async ( event, context) =>{
    let mail=event.queryStringParameters.email
    return output("Respondiendo desde middy", mail)
}

exports.handler=middy(fnMain).use(middleWare())