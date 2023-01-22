const Joi = require("joi");
const { objectId } = require("./custom.validation");
const getUser = {
    params: Joi.object().keys({
        userId: Joi.string().custom(objectId)
    }),
};
const setData = {
    params: Joi.object().keys({
        userId: Joi.string().custom(objectId),
    }),
    body: Joi.object().keys({
        weight: Joi.number().required(),
        height: Joi.number().required(),
        image: Joi.string(),
        aadhaar: Joi.number(),
        code: Joi.string(),
        IllnessName: Joi.string(),
        medicine: Joi.string(),
        date: Joi.string(),
        treatment: Joi.string(),
        bloodType: Joi.string(),
        sex: Joi.string(),
        age: Joi.number()
    }),
};
module.exports = {
    getUser, setData
}