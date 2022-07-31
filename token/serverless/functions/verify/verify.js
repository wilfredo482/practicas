const jwt=require("jsonwebtoken")
//utils
const {output}=require("../../utils/utils")
const {SECRETO:{SECRET_TOKEN}}=require("../../utils/utils");

exports.handler=async(event)=>{
    const tok=event.multiValueHeaders.authorization[0].split(" ")[1];
    console.log(tok);
    try {
        var decoded = await jwt.verify(tok, SECRET_TOKEN);
        return output(decoded)
      } catch(err) {
        return output(err)
      }
}