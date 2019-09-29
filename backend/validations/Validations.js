// VALIDATIONS
const Joi = require('@hapi/joi');

// REGISTER VALIDATION
const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().required().min(5),
        email: Joi.string().email(),
        password: Joi.string().min(6)
    });

    // VALIDATING DATA
    return schema.validate(data);
}

// LOGIN VALIDATION
const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().email(),
        password: Joi.string().min(6)
    });

    // VALIDATING DATA
    return schema.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;