const {MongoClient}=require('mongodb');
const output= content => ({
    statusCode:200,
    body:JSON.stringify(content)
});


let url="mongodb+srv://admin:admin.123@dbtest.msbcg.mongodb.net/?retryWrites=true&w=majority"

exports.handler=async (event,context)=>{

    let {httpMethod:method}=event;
    const client = new MongoClient(url);
    await client.connect();
    const collections=client.db().collection('usuarios');

    if(method=="POST"){
        try{
            await collections.insertOne({correo:"Wilfredp@gmail.com", nombre:"Wilfredo", apellido:"Pinto"});
            return output("usuario creado")
        }catch (error){
            cpnsole.log(error);
        }
    };

    if(method=="GET"){
        try {
            let respoonse=await collections.find({}).toArray();
            return output(respoonse)
        } catch (error) {
            console.log(error)
        }
    }
};
