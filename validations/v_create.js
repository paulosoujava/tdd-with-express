const { Joi } = require('express-validation')

const v_create = {
    body: Joi.object({
        login: Joi.string()
            .min(3)
            .required(),
        senha: Joi.string()
            .min(3)
            .required(),
    }),
}

module.exports = v_create