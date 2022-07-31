function output(content){
    return{
        statusCode:200,
        body:JSON.stringify({
            content
        })
    }
}

const SECRETO={
    SECRET_TOKEN:"shhh"
}

module.exports={
    output, SECRETO
}