const jwt=require("jsonwebtoken");
const {output, SECRETO:{SECRET_TOKEN}}=require("../../utils/utils")

exports.handler = async (event) =>{
    let payload={
        foo:"fooziman", 
        role:"dmin", 
        correo:"foo@gmail.com"
    };

    try {
        const token= await jwt.sign(payload,SECRET_TOKEN);
        return output(token);
    } catch (error) {
        return output(error);
    }
}