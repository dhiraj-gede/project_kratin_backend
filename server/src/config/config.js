const dotenv = require('dotenv');
// const path = require('path');
// const Joi = require('joi');

dotenv.config({path: path.join(__dirname, '../../.env')});
// const envVarSchema = Joi.object()
// .keys({
//     NODE_ENV: Joi.string()
//         .valid("production", "development", "test", "production")
//         .required(),
//     PORT: Joi.number().default(3002),
//     MONGODB_URL: Joi.string().required().description("Mongo DB url"),
//     JWT_SECRET: Joi.string().required().description("JWT secret key"),
//     JWT_ACCESS_EXPIRATION_MINUTES: Joi.number()
//       .default(30)
//       .description("minutes after which access tokens expire"),
// })
// .unknown();

// const  {value: envVars, error} = envVarSchema.prefs({errors:{label:'key'}}).validate(process.env);
// if(error) {
//     throw new Error(`Config validation error: ${error.message}`);
// }
 

module.exports ={
    // env: envVars.NODE_ENV||'NODE_ENV', 
    port:envVars.PORT,
    // mongoose:{
    //     url:envVars.MONGODB_URL+ (envVars.NODE_ENV === "test" ? "-test" : ""),
    //     options: {
    //         useCreateIndex: true,
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true,
    //     },
    // },
    // jwt: {
    //     secret: envVars.JWT_SECRET,
    //     accessExpirationMinutes: envVars.JWT_ACCESS_EXPIRATION_MINUTES,
    // },
    // default_userType:'patient'
}