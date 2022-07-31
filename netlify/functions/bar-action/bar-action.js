let yup=require("yup");

let schema = yup.object().shape({
    nombre: yup.string().required(),
    edad:yup.number().required().integer().positive(),
    correo: yup.string().email().required(),
  });

exports.handler= async (event, context) =>{
    let correo=event.queryStringParameters.correo || "#";
    let edad=event.queryStringParameters.edad;
    let nombre=event.queryStringParameters.nombre;

    let isvalid= await schema.isValid({
      nombre,
      edad,
      correo,
    });

    if(isvalid){
        return{
            statusCode:200,
            body: "Datos validos"
        }
    }else{
        return{
            statusCode:200,
            body:"Datos Invalidos"
        }
    }
}